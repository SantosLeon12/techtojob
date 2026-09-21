import { ArrowUp } from "lucide-react";
import styles from "./BackToTop.module.css";

export default function BackToTop({ label }: { label: string }) {
  return (
    <a href="#top" aria-label={label} title={label} className={styles.link}>
      <ArrowUp aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}
