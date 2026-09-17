import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { DISCORD_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./TalentCompaniesSection.module.css";

export default async function TalentCompaniesSection() {
  const messages = await getSiteMessages();
  const { talentCompanies } = messages;
  const { talent, companies } = talentCompanies;

  return (
    <section
      aria-labelledby="talent-companies-title"
      className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-[53rem]">
          <p className="mb-5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.19em] text-brand-dark">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
            {talentCompanies.eyebrow}
          </p>
          <h2
            id="talent-companies-title"
            className="max-w-[19ch] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.16] tracking-[-0.055em] text-brand-dark"
          >
            {talentCompanies.title}
          </h2>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {talentCompanies.description}
          </p>
        </div>

        <div className={styles.ecosystem}>
          <article id="talento" aria-labelledby="talent-title" className={styles.audience}>
            <p className={styles.audienceLabel}>{talent.label}</p>
            <h3 id="talent-title" className={styles.audienceTitle}>{talent.title}</h3>
            <p className={styles.audienceDescription}>{talent.description}</p>

            <div className={styles.profile}>
              <p className={styles.profileLabel}>{talent.profileLabel}</p>
              <div className={styles.profileHeading}>
                <strong className={styles.role}>{talent.role}</strong>
                <span className={styles.level}>{talent.level}</span>
              </div>
              <p className={styles.fieldLabel}>{talentCompanies.technologiesLabel}</p>
              <ul className={styles.technologies}>
                {talent.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className={styles.profileFooter}>
                <span>{talent.availabilityLabel}</span>
                <strong><span className={styles.statusDot} aria-hidden="true" />{talent.availability}</strong>
              </div>
            </div>

            <a href={DISCORD_URL} className={styles.cta}>
              {talent.cta}
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </article>

          <div className={styles.connection} aria-hidden="true">
            <div className={styles.connectionMark}>
              <Image src="/brand/symbol-positive.svg" alt="" width={32} height={32} />
            </div>
            <span>{talentCompanies.connection}</span>
          </div>

          <article id="empresas" aria-labelledby="companies-title" className={styles.audience}>
            <p className={styles.audienceLabel}>{companies.label}</p>
            <h3 id="companies-title" className={styles.audienceTitle}>{companies.title}</h3>
            <p className={styles.audienceDescription}>{companies.description}</p>

            <div className={styles.profile}>
              <p className={styles.profileLabel}>{companies.profileLabel}</p>
              <div className={styles.profileHeading}>
                <strong className={styles.role}>{companies.role}</strong>
              </div>
              <p className={styles.fieldLabel}>{talentCompanies.technologiesLabel}</p>
              <ul className={styles.technologies}>
                {companies.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className={styles.profileFooter}>
                <span>{companies.modalityLabel}</span>
                <strong>{companies.modality}</strong>
              </div>
            </div>

            <a href={DISCORD_URL} className={styles.cta}>
              {companies.cta}
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}
