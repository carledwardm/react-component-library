"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import HeaderComponent from "@/components/Header/Header";
import { FaChevronRight } from "react-icons/fa";

export default function Header() {
    return (
        <main className={styles.main}>
            <section className={styles.componentsSection}>
                <h1 className={styles.pageTitle}>Header Components</h1>
                <hr className={styles.divider} />
                <div className={styles.componentContainer}>
                    <div className={styles.componentDisplay}>
                        <HeaderComponent />
                    </div>
                    <p className={styles.descriptionText}>A basic header component with a default demo logo. Currently
                        holds 4 links in its nav container. This component will be updated in the near future to have
                        mobile toggle button.
                    </p>
                
                    <Link 
                        className={styles.repoLink} 
                        href="https://github.com/carledwardm/react-component-library/tree/main/components/Header"
                        target="_blank">
                            <FaChevronRight className={styles.repoChev}/> Repo Link
                    </ Link>
                </div>
            </section>
        </main>
    )
}