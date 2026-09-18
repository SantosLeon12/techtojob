import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { DISCORD_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./NetworkingSection.module.css";

export default async function NetworkingSection() {
  const messages = await getSiteMessages();
  const { networking } = messages;

  return (
    <section id="comunidad" aria-labelledby="networking-title" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {networking.eyebrow}
            </p>
            <h2 id="networking-title" className={styles.title}>{networking.title}</h2>
            <p className={styles.description}>{networking.description}</p>
          </div>

          <div className={styles.network}>
            <div className={styles.orbit}>
              <svg className={styles.connectors} viewBox="0 0 700 500" preserveAspectRatio="none" aria-hidden="true">
                <path d="M285 203 136 95" />
                <path d="M359 168 372 60" />
                <path d="M419 209 578 115" />
                <path d="M268 248 105 245" />
                <path d="M431 255 610 267" />
                <path d="M287 303 166 405" />
                <path d="M367 331 391 445" />
                <path d="M415 304 582 405" />
              </svg>
              <ul className={styles.areas}>
                {networking.areas.map((area, index) => (
                  <li key={area} className={styles.area} data-position={index + 1}>
                    <span className={styles.node} aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.center} aria-hidden="true">
              <span className={styles.centerMark} />
              <span>{networking.community}</span>
            </div>
          </div>

          <div className={styles.closing}>
            <p className={styles.statement}>{networking.statement}</p>
            <a href={DISCORD_URL} className={styles.cta}>
              {networking.cta}
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
