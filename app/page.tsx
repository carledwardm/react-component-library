import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Component Library for React/Next.js</h1>
        <h2 className={styles.componentListTitle}>Component List</h2>
        <ul className={styles.componentList}>
          <li className={styles.componentLink}><Link href="/login">Log In Component</ Link></li>
          <li className={styles.componentLink}><Link href="/signup">Sign Up Component</ Link></li>
          <li className={styles.componentLink}><Link href="/toast">Toast Component</ Link></li>
        </ul>
      </main>
    </div>
  );
}
