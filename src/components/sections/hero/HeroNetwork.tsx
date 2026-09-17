import Image from "next/image";
import { BriefcaseBusiness, Code2, Trophy, UsersRound } from "lucide-react";
import { getSiteMessages } from "@/i18n/messages";
import styles from "./HeroNetwork.module.css";

export default async function HeroNetwork() {
  const messages = await getSiteMessages();
  const { network } = messages.hero;

  return (
    <div className={styles.network} aria-label={network.accessibleLabel} role="img">
      <div className={styles.connectionVertical} aria-hidden="true" />
      <div className={styles.connectionHorizontal} aria-hidden="true" />
      <div className={styles.connectionLower} aria-hidden="true" />

      <div className={styles.center} aria-hidden="true">
        <div className={styles.centerIcon}>
          <Image src="/brand/symbol-positive.svg" alt="" width={54} height={54} />
        </div>
        <span>{network.center}</span>
      </div>

      <article className={`${styles.card} ${styles.talent}`} aria-hidden="true">
        <div className={styles.cardHead}>
          <span className={styles.cardIcon}><Code2 size={16} strokeWidth={1.8} /></span>
          <span>{network.talent.label}</span>
        </div>
        <strong>{network.talent.title}</strong>
        <small>{network.talent.skills}</small>
        <span className={styles.status}><span className={styles.statusDot} />{network.talent.status}</span>
      </article>

      <article className={`${styles.card} ${styles.company}`} aria-hidden="true">
        <div className={styles.cardHead}>
          <span className={styles.cardIcon}><BriefcaseBusiness size={16} strokeWidth={1.8} /></span>
          <span>{network.company.label}</span>
        </div>
        <strong>{network.company.title}</strong>
        <small>{network.company.skills}</small>
        <span className={styles.status}><span className={styles.statusDot} />{network.company.status}</span>
      </article>

      <article className={`${styles.card} ${styles.tournament}`} aria-hidden="true">
        <div className={styles.cardHead}>
          <span className={styles.cardIcon}><Trophy size={16} strokeWidth={1.8} /></span>
          <span>{network.tournament.label}</span>
        </div>
        <strong>{network.tournament.title}</strong>
        <small>{network.tournament.description}</small>
      </article>

      <div className={styles.community} aria-hidden="true">
        <UsersRound size={16} strokeWidth={1.8} />
        <span>{network.community}</span>
      </div>
    </div>
  );
}
