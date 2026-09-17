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
            <svg className={styles.connectors} viewBox="0 0 700 500" preserveAspectRatio="none" aria-hidden="true">
              <path d="M350 250 136 95 M350 250 372 60 M350 250 578 115 M350 250 105 245 M350 250 610 267 M350 250 166 405 M350 250 391 445 M350 250 582 405" />
            </svg>
            <div className={styles.center} aria-hidden="true">
              <span className={styles.centerMark} />
              <span>{networking.community}</span>
            </div>
            <ul className={styles.areas}>
              {networking.areas.map((area, index) => (
                <li key={area} className={styles.area} data-position={index + 1}>
                  <span className={styles.node} aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
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
