import Container from "@/components/ui/Container";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./HowItWorksSection.module.css";

export default async function HowItWorksSection() {
  const messages = await getSiteMessages();
  const { howItWorks } = messages;

  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-title"
      className="border-t border-border bg-surface pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-20"
    >
      <Container>
        <div className="max-w-[51rem]">
          <p className="mb-5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.19em] text-brand-dark">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
            {howItWorks.eyebrow}
          </p>
          <h2
            id="how-it-works-title"
            className="max-w-[19ch] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.16] tracking-[-0.055em] text-brand-dark"
          >
            {howItWorks.title}
          </h2>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {howItWorks.description}
          </p>
        </div>

        <ol className={styles.journey}>
          {howItWorks.steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
