import Link from "next/link";
import styles from "@/components/global-layout.module.css";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">🎬 ONEBITE CINEMA</Link>
      </header>
      {children}
    </div>
  );
}
