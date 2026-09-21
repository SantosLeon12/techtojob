import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sora } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "../globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const { metadata } = (await import(`../../messages/${locale}.json`)).default;
  const canonical = new URL(`/${locale}`, SITE_URL).toString();
  const languages = Object.fromEntries([
    ...routing.locales.map((language) => [language, new URL(`/${language}`, SITE_URL).toString()]),
    ["x-default", new URL(`/${routing.defaultLocale}`, SITE_URL).toString()],
  ]);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: metadata.title, template: "%s | TechToJob" },
    description: metadata.description,
    applicationName: SITE_NAME,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      siteName: SITE_NAME,
      title: metadata.title,
      description: metadata.description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [new URL(`/${locale}/opengraph-image`, SITE_URL).toString()],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
