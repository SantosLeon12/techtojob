import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { DISCORD_URL } from "@/lib/constants";
import messages from "@/messages/es.json";
import styles from "./FinalCtaSection.module.css";

export default function FinalCtaSection() {
  const { finalCta } = messages;

  return (
    <section aria-labelledby="final-cta-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {finalCta.eyebrow}
          </p>
          <h2 id="final-cta-title" className={styles.title}>{finalCta.title}</h2>
          <p className={styles.description}>{finalCta.description}</p>
          <a href={DISCORD_URL} className={styles.cta}>
            {finalCta.cta}
            <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} />
          </a>
        </div>
      </Container>
    </section>
  );
}
