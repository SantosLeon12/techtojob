import Image from "next/image";
import Container from "@/components/ui/Container";
import messages from "@/messages/es.json";
import styles from "./TestimonialsSection.module.css";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string | null;
  profileUrl: string | null;
};

export default function TestimonialsSection() {
  const { testimonials } = messages;
  const entries: Testimonial[] = testimonials.entries;

  return (
    <section aria-labelledby="testimonials-title" className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {testimonials.eyebrow}
          </p>
          <h2 id="testimonials-title" className={styles.title}>{testimonials.title}</h2>
          <p className={styles.description}>{testimonials.description}</p>
          <p className={styles.disclosure}>{testimonials.disclosure}</p>
        </div>

        <div className={styles.wall}>
          {entries.map((entry, index) => (
            <figure key={entry.name} className={styles.testimonial} data-position={index + 1}>
              <blockquote className={styles.quote}>
                <p>{entry.quote}</p>
              </blockquote>
              <figcaption className={styles.attribution}>
                {entry.image ? (
                  <Image className={styles.avatar} src={entry.image} alt={entry.name} width={48} height={48} />
                ) : (
                  <span className={styles.avatar} aria-hidden="true"><span /></span>
                )}
                <span className={styles.identity}>
                  {entry.profileUrl ? (
                    <a href={entry.profileUrl} className={styles.profileLink}>{entry.name}</a>
                  ) : (
                    <strong>{entry.name}</strong>
                  )}
                  <span>{entry.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
