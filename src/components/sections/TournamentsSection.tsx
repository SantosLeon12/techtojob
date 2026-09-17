import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { DISCORD_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./TournamentsSection.module.css";

export default async function TournamentsSection() {
  const messages = await getSiteMessages();
  const { tournaments } = messages;

  return (
    <section
      id="torneos"
      aria-labelledby="tournaments-title"
      className="bg-brand-dark py-16 text-brand-white sm:py-20 lg:py-24"
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {tournaments.eyebrow}
            </p>
            <h2 id="tournaments-title" className={styles.title}>
              {tournaments.title}
            </h2>
            <p className={styles.description}>{tournaments.description}</p>
          </div>

          <article className={styles.feature} aria-labelledby="tournament-feature-title">
            <div className={styles.featureTop}>
              <p className={styles.featureLabel}>{tournaments.feature.label}</p>
              <span className={styles.featureSymbol} aria-hidden="true">
                <Image src="/brand/symbol-positive.svg" alt="" width={26} height={26} />
              </span>
            </div>
            <h3 id="tournament-feature-title" className={styles.featureTitle}>
              {tournaments.feature.title}
            </h3>
            <div className={styles.featureRail} aria-hidden="true">
              <span />
            </div>
            <div className={styles.featureDetails}>
              <p className={styles.detailsLabel}>{tournaments.feature.areasLabel}</p>
              <ul className={styles.areas}>
                {tournaments.feature.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <ol className={styles.stages}>
                {tournaments.feature.stages.map((stage) => (
                  <li key={stage}>{stage}</li>
                ))}
              </ol>
            </div>
          </article>

          <ol className={styles.process}>
            {tournaments.steps.map((step) => (
              <li key={step.number} className={styles.processStep}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href={DISCORD_URL} className={styles.cta}>
            {tournaments.cta}
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </a>
        </div>
      </Container>
    </section>
  );
}
