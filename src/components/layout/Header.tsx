import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { ArrowUpRight, Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import DiscordMark from "@/components/ui/DiscordMark";
import shimmer from "@/components/ui/DiscordShimmer.module.css";
import { DISCORD_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./Header.module.css";

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
    <div role="group" aria-label={messages.header.languageLabel} className={styles.languageSwitch}>
      {(["es", "en"] as const).map((language) => (
        <Link
          key={language}
          href={`/${language}`}
          scroll={false}
          lang={language}
          hrefLang={language}
          aria-current={locale === language ? "page" : undefined}
          className={`${styles.languageOption} ${locale === language ? styles.languageActive : ""}`}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <header id="top" className="relative z-20 border-b border-border bg-background">
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
                  className={`${styles.navigationLink} rounded-sm text-[0.82rem] font-medium text-brand-dark`}
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
            className={`${styles.discordLink} ${shimmer.shimmer} ${shimmer.shimmerOnLight} inline-flex min-h-11 items-center gap-2 rounded-md border border-brand-dark px-4 text-[0.82rem] font-bold`}
          >
            <span className={styles.discordIcon} aria-hidden="true">
              <DiscordMark tone="black" className={styles.discordIconBlack} />
              <DiscordMark tone="white" className={styles.discordIconWhite} />
            </span>
            {messages.header.discord}
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>

        <details className="group relative xl:hidden">
          <summary className={`${styles.menuTrigger} flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 text-sm font-medium marker:hidden [&::-webkit-details-marker]:hidden`}>
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
                  <a href={item.href} className={`${styles.mobileLink} flex min-h-11 items-center rounded-md px-3 py-2.5 text-sm font-medium`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
              <span className="text-xs font-bold text-muted">{messages.header.languageLabel}</span>
              {localeLinks}
            </div>
            <a
              href={DISCORD_URL}
              className={`${styles.mobileDiscord} ${shimmer.shimmer} mt-3 flex min-h-11 items-center justify-between rounded-md bg-brand-dark px-3 text-sm font-bold text-brand-white`}
            >
              <span className="inline-flex items-center gap-2">
                <DiscordMark tone="white" className={styles.mobileDiscordIcon} />
                {messages.header.discord}
              </span>
              <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </a>
          </nav>
        </details>
      </Container>
    </header>
  );
}
