"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import HeaderComponent from "@/components/Header/Header";
import { FaChevronRight } from "react-icons/fa";

export default function Header() {
    return (
        <main className={styles.headerMain}>
            <nav className={styles.breadcrumbs}>
                    <Link href="/" className={styles.homeLink}>Home </ Link>
                    <FaChevronRight />
                    <span className={styles.routeName}> Login</span>
                </nav>  
            <div className={styles.componentContainer}>
                <HeaderComponent />
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
        </main>
    )
}