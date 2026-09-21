import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, new URL(`/${locale}`, SITE_URL).toString()]),
  );

  return routing.locales.map((locale) => ({
    url: languages[locale],
    alternates: { languages },
  }));
}
