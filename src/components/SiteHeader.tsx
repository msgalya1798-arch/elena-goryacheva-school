import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { primaryNav, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="container max-w-container flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="font-display text-xl text-ink group-hover:text-violet transition-colors duration-reveal">
            {siteConfig.logoText}
          </span>
          <span className="text-xs tracking-wide text-graphite uppercase">
            {siteConfig.logoSubtext}
          </span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden lg:flex items-center gap-8">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink hover:text-violet transition-colors duration-reveal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#finder"
            className="hidden sm:inline-flex items-center rounded-full bg-violet px-5 py-2.5 text-sm text-white shadow-md shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-lg hover:shadow-violet/35"
          >
            Подобрать обучение
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
