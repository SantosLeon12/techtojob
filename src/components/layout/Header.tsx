import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { ArrowUpRight, Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import { DISCORD_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";

export default async function Header() {
  const messages = await getSiteMessages();
  const locale = await getLocale();
  const navigation = [
    { href: "#como-funciona", label: messages.header.navigation.howItWorks },
    { href: "#talento", label: messages.header.navigation.talent },
    { href: "#empresas", label: messages.header.navigation.companies },
    { href: "#torneos", label: messages.header.navigation.tournaments },
    { href: "#comunidad", label: messages.header.navigation.community },
    { href: "#noticias", label: messages.header.navigation.news },
  ];
  const localeLinks = (
    <div role="group" aria-label={messages.header.languageLabel} className="flex items-center gap-1 text-xs font-medium">
      {(["es", "en"] as const).map((language) => (
        <Link
          key={language}
          href={`/${language}`}
          lang={language}
          hrefLang={language}
          aria-current={locale === language ? "page" : undefined}
          className={`rounded-sm px-2 py-2 focus-visible:outline-offset-2 ${locale === language ? "font-bold underline underline-offset-4" : "text-muted"}`}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="relative z-20 border-b border-border bg-background">
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link
          href={`/${locale}`}
          aria-label={messages.header.homeLabel}
          className="inline-flex shrink-0 items-center gap-2.5 rounded-sm font-bold tracking-tight focus-visible:outline-offset-4"
        >
          <Image src="/brand/symbol-positive.svg" alt="" width={34} height={34} priority />
          <span className="text-[1.22rem]">{messages.header.brandName}</span>
        </Link>

        <nav aria-label={messages.header.navigationLabel} className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm text-[0.82rem] font-medium text-brand-dark transition-colors hover:text-muted focus-visible:outline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          {localeLinks}
          <a
            href={DISCORD_URL}
            className="inline-flex min-h-11 items-center gap-1 rounded-md border border-brand-dark px-4 text-[0.82rem] font-bold transition-colors hover:bg-brand-dark hover:text-brand-white"
          >
            {messages.header.discord}
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>

        <details className="group relative xl:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 text-sm font-medium marker:hidden [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" size={19} strokeWidth={1.8} />
            {messages.header.menu}
          </summary>
          <nav
            aria-label={messages.header.mobileNavigationLabel}
            className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2.5rem))] rounded-lg border border-border bg-background p-3 shadow-sm"
          >
            <ul className="grid gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-border pt-2">{localeLinks}</div>
            <a
              href={DISCORD_URL}
              className="mt-3 flex min-h-11 items-center justify-between rounded-md bg-brand-dark px-3 text-sm font-bold text-brand-white"
            >
              {messages.header.discord}
              <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </a>
          </nav>
        </details>
      </Container>
    </header>
  );
}
