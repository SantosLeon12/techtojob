import Container from "@/components/ui/Container";
import messages from "@/messages/es.json";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  const { newsletter } = messages;

  return (
    <section aria-labelledby="newsletter-title" className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {newsletter.eyebrow}
            </p>
            <h2 id="newsletter-title" className={styles.title}>{newsletter.title}</h2>
            <p className={styles.description}>{newsletter.description}</p>
          </div>

          {/* TODO: Connect newsletter provider before production. */}
          <form className={styles.form} aria-describedby="newsletter-unavailable">
            <label htmlFor="newsletter-email" className={styles.label}>{newsletter.emailLabel}</label>
            <div className={styles.controls}>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={newsletter.emailPlaceholder}
                className={styles.input}
                disabled
              />
              <button type="submit" className={styles.button} disabled>{newsletter.submit}</button>
            </div>
            <p className={styles.reassurance}>{newsletter.reassurance}</p>
            <p id="newsletter-unavailable" className={styles.unavailable}>{newsletter.unavailable}</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
