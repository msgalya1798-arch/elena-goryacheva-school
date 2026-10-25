"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const COUNTER_ID = 113790004;
const CONSENT_STORAGE_KEY = "goryacheva-analytics-consent";
const SETTINGS_EVENT = "goryacheva-analytics-settings";

type AnalyticsConsent = "accepted" | "rejected" | null;

// Defer automatic page views so each Next.js navigation is tracked only once.
// Session replay (Webvisor) and ecommerce collection are intentionally disabled.
function initializeCounter() {
  if (window.__goryachevaMetrikaInitialized) return;
  window.__goryachevaMetrikaInitialized = true;

  if (!window.ym) {
    type QueuedMetrika = NonNullable<Window["ym"]> & { a?: unknown[][]; l?: number };
    const queued = ((...args: unknown[]) => {
      (queued.a ??= []).push(args);
    }) as QueuedMetrika;
    queued.l = Date.now();
    window.ym = queued;
  }

  const src = "https://mc.yandex.ru/metrika/tag.js?id=113790004";
  if (!document.querySelector(`script[src="${src}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  window.ym(COUNTER_ID, "init", {
    ssr: true,
    defer: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
    ecommerce: false,
  });
}

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: unknown[]) => void;
    __goryachevaMetrikaInitialized?: boolean;
    disableYaCounter113790004?: boolean;
  }
}

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<AnalyticsConsent>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const lastTrackedUrl = useRef<string | null>(null);
  const query = searchParams?.toString() ?? "";
  const route = `${pathname ?? "/"}${query ? `?${query}` : ""}`;
  const isProduction = typeof window !== "undefined" && window.location.hostname === "goryacheva.online";

  useEffect(() => {
    if (window.location.hostname !== "goryacheva.online") return;

    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      // A visitor with disabled storage can still choose for the current page.
    }

    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
      window.disableYaCounter113790004 = saved !== "accepted";
    } else {
      setShowSettings(true);
    }

    const reopen = () => setShowSettings(true);
    window.addEventListener(SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(SETTINGS_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || !isProduction) return;
    window.disableYaCounter113790004 = false;
    initializeCounter();
    setScriptReady(true);
  }, [consent, isProduction]);

  useEffect(() => {
    if (!scriptReady || consent !== "accepted" || !isProduction || !window.ym) return;
    const url = window.location.href;
    if (lastTrackedUrl.current === url) return;

    const options: { title: string; referer?: string } = { title: document.title };
    if (lastTrackedUrl.current) options.referer = lastTrackedUrl.current;
    window.ym(COUNTER_ID, "hit", url, options);
    lastTrackedUrl.current = url;
  }, [route, scriptReady, consent, isProduction]);

  const choose = (choice: Exclude<AnalyticsConsent, null>) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // The decision still applies for this page if storage is unavailable.
    }
    window.disableYaCounter113790004 = choice === "rejected";
    if (choice === "rejected") {
      lastTrackedUrl.current = null;
      setScriptReady(false);
    }
    setConsent(choice);
    setShowSettings(false);
  };

  return (
    <>

      {isProduction && showSettings && (
        <aside
          role="region"
          aria-label="Настройки аналитики"
          className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-xl rounded-2xl border border-border bg-paper px-5 py-4 text-ink shadow-xl sm:px-6"
        >
          <p className="text-sm font-semibold">Аналитика сайта</p>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            Мы используем Яндекс Метрику, чтобы понимать посещаемость и улучшать обучение.
            С вашего разрешения она сохраняет cookie и собирает сведения о просмотрах страниц и переходах.
            Без согласия аналитика не включается. Подробнее — в{" "}
            <Link href="/legal/privacy" className="underline underline-offset-2">
              политике обработки данных
            </Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              Разрешить аналитику
            </button>
            <button
              type="button"
              onClick={() => choose("rejected")}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink hover:bg-paper/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              Не разрешать
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export const metrikaSettingsEvent = SETTINGS_EVENT;
