import type { Metadata } from "next";
import { Unbounded, Onest } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import { socialImage } from "@/lib/metadata";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultTitle = "Елена Горячева — школа маникюра · Каменск-Шахтинский и онлайн";
const defaultDescription =
  "Маникюр как система, а не набор движений. Обучение онлайн по России и очно в Каменске-Шахтинском.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s · Елена Горячева, школа маникюра",
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: "Елена Горячева — школа маникюра",
    locale: "ru_RU",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: "Елена Горячева — школа маникюра",
        inLanguage: "ru-RU",
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#elena-goryacheva"),
        name: "Елена Горячева",
        url: absoluteUrl("/about"),
        jobTitle: "Мастер и преподаватель маникюра",
        sameAs: ["https://t.me/Elena_multinail"],
      },
    ],
  };

  return (
    <html lang="ru" className={`${unbounded.variable} ${onest.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Перейти к содержимому</a>
        <SiteHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
