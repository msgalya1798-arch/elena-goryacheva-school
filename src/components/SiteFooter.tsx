import Link from "next/link";
import { footerLegalLinks, primaryNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white mt-section-lg">
      <div className="container max-w-container py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-ink">{siteConfig.logoText}</p>
          <p className="text-sm text-graphite mt-1">{siteConfig.logoSubtext}</p>
          <p className="text-sm text-graphite mt-4">
            Офлайн · {siteConfig.city} <br /> Онлайн · Россия
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <p className="text-sm text-graphite mb-3">Разделы</p>
          <ul className="space-y-2">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink hover:text-violet">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Юридическая информация">
          <p className="text-sm text-graphite mb-3">Документы</p>
          <ul className="space-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink hover:text-violet">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container max-w-container py-6 text-xs text-graphite">
          © {new Date().getFullYear()} {siteConfig.logoText}.
        </div>
      </div>
    </footer>
  );
}
