"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const COUNTER_ID = 113790004;

// Keep analytics on the public production domain only, not preview or local builds.
// Manual hit calls are needed for Next.js client-side route changes.
const METRIKA_BOOTSTRAP = `
if (window.location.hostname === "goryacheva.online") {
  (function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j=0; j<document.scripts.length; j++) {
      if (document.scripts[j].src === r) return;
    }
    k=e.createElement(t);
    a=e.getElementsByTagName(t)[0];
    k.async=1;
    k.src=r;
    a.parentNode.insertBefore(k,a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=113790004", "ym");

  ym(113790004, "init", {
    ssr: true,
    defer: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
  });
}
`;

declare global {
  interface Window {
    ym?: (counterId: number, action: string, ...args: unknown[]) => void;
  }
}

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [scriptReady, setScriptReady] = useState(false);
  const lastTrackedUrl = useRef<string | null>(null);
  const query = searchParams?.toString() ?? "";
  const route = `${pathname ?? "/"}${query ? `?${query}` : ""}`;

  useEffect(() => {
    if (!scriptReady || window.location.hostname !== "goryacheva.online" || !window.ym) return;

    const url = window.location.href;
    if (lastTrackedUrl.current === url) return;

    const options: { title: string; referer?: string } = { title: document.title };
    if (lastTrackedUrl.current) options.referer = lastTrackedUrl.current;

    window.ym(COUNTER_ID, "hit", url, options);
    lastTrackedUrl.current = url;
  }, [route, scriptReady]);

  return (
    <Script
      id="yandex-metrika-113790004"
      strategy="afterInteractive"
      onReady={() => setScriptReady(true)}
      dangerouslySetInnerHTML={{ __html: METRIKA_BOOTSTRAP }}
    />
  );
}
