import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./NewsSection.module.css";

export default async function NewsSection() {
  const messages = await getSiteMessages();
  const { news } = messages;

  return (
    <section id="noticias" aria-labelledby="news-title" className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {news.eyebrow}
          </p>
          <h2 id="news-title" className={styles.title}>{news.title}</h2>
          <p className={styles.description}>{news.description}</p>
          <p className={styles.disclosure}>{news.disclosure}</p>
        </div>

        <div className={styles.stories}>
          {news.entries.map((entry, index) => (
            <article key={entry.title} className={styles.story} data-position={index + 1}>
              <div>
                <p className={styles.category}>
                  <span aria-hidden="true" />
                  {entry.category}
                </p>
                <h3 className={styles.storyTitle}>{entry.title}</h3>
                <p className={styles.storyDescription}>{entry.description}</p>
              </div>
              <a href={entry.href} className={styles.link}>
                {entry.linkLabel}
                <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
