import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import Container from "@/components/ui/Container";
import { DISCORD_URL, FOOTER_PENDING_URLS, LINKEDIN_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./Footer.module.css";

export default async function Footer() {
  const messages = await getSiteMessages();
  const locale = await getLocale();
  const { footer } = messages;
  const communityLinks = [
    { href: "#como-funciona", label: footer.howItWorks },
    { href: "#talento", label: footer.talent },
    { href: "#empresas", label: footer.companies },
    { href: "#torneos", label: footer.tournaments },
    { href: "#comunidad", label: footer.networking },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href={`/${locale}`} aria-label={footer.brandHomeLabel} className={styles.brandLink}>
              <Image src="/brand/symbol-negative.svg" alt="" width={33} height={33} />
              <span>{footer.brandName}</span>
            </Link>
            <p>{footer.description}</p>
          </div>

          <nav aria-label={footer.navigationLabel} className={styles.navigation}>
            <div className={styles.group}>
              <h2>{footer.communityHeading}</h2>
              <ul>{communityLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
            </div>
            <div className={styles.group}>
              <h2>{footer.contentHeading}</h2>
              <ul><li><a href="#noticias">{footer.news}</a></li></ul>
            </div>
            <div className={styles.group}>
              <h2>{footer.socialHeading}</h2>
              <ul>
                <li><a href={DISCORD_URL}>{footer.discord}</a></li>
                <li><a href={LINKEDIN_URL}>{footer.linkedin}</a></li>
              </ul>
            </div>
            <div className={styles.group}>
              <h2>{footer.legalHeading}</h2>
              <ul>
                <li>{FOOTER_PENDING_URLS.privacy ? <a href={FOOTER_PENDING_URLS.privacy}>{footer.privacy}</a> : <span className={styles.pending}>{footer.privacy}</span>}</li>
                <li>{FOOTER_PENDING_URLS.legal ? <a href={FOOTER_PENDING_URLS.legal}>{footer.legalNotice}</a> : <span className={styles.pending}>{footer.legalNotice}</span>}</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.bottom}><p>{footer.copyright}</p></div>
      </Container>
    </footer>
  );
}
