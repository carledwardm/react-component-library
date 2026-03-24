
import styles from "./page.module.css";
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.homeMain}>
        <div className={styles.leftSideBar}>
          <nav className={styles.componentNav}>
          <h2 className={styles.componentListTitle}>Available Components</h2>
          <ul className={styles.componentList}>
            <li className={styles.componentLink}><Link href="/buttons"><FaChevronRight className={styles.componentChev}/> Buttons</ Link></li>
            <li className={styles.componentLink}><Link href="/footer"><FaChevronRight className={styles.componentChev}/> Footer </ Link></li>
            <li className={styles.componentLink}><Link href="/header"><FaChevronRight className={styles.componentChev}/> Header </ Link></li>
            <li className={styles.componentLink}><Link href="/login"><FaChevronRight className={styles.componentChev}/> Log In</ Link></li>
            <li className={styles.componentLink}><Link href="/signup"><FaChevronRight className={styles.componentChev}/> Sign Up</ Link></li>
            <li className={styles.componentLink}><Link href="/toast"><FaChevronRight className={styles.componentChev}/> Toast</ Link></li>
          </ul>
        </nav>
        </div>
        <div className={styles.libraryTextContainer}>
          <h1 className={styles.libraryTitle}>Component Library for React/Next.js</h1>
          <p className={styles.libraryGreeting}>Hello! Welcome to my componeny library! Feel free to check out the available components and copy any code
            you'd like to use from them via the repo links on each page. Check back in the future for updates!
          </p>
          <Link 
            className={styles.repoLink} 
            href="https://github.com/carledwardm/react-component-library/tree/main"
            target="_blank">
              <FaChevronRight className={styles.repoChev}/> Full Repo Link
          </ Link>
        </div>
      </main>
    </div>
  );
}
