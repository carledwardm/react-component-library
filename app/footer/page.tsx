"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";
import FooterComponent from "@/components/Footer/Footer";
import { FaChevronRight } from "react-icons/fa";

export default function Footer() {
    return (
        <main className={styles.footerMain}>
            <nav className={styles.breadcrumbs}>
                    <Link href="/" className={styles.homeLink}>Home </ Link>
                    <FaChevronRight />
                    <span className={styles.routeName}> Login</span>
                </nav>  
            <div className={styles.componentContainer}>
                <FooterComponent />
                <p className={styles.descriptionText}>A footer component currently displaying a demo logo, 3 default
                    links and a copyright with a dynamix year added.
                </p>
                <Link 
                    className={styles.repoLink} 
                    href="https://github.com/carledwardm/react-component-library/tree/main/components/Footer"
                    target="_blank">
                        <FaChevronRight className={styles.repoChev}/> Repo Link
                </Link>
            </div>
        </main>
    )
}