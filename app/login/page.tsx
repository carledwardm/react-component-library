"use client";
import Link from "next/link";
import styles from "./Login.module.scss";
import Login from "@/components/Login/Login";
import { FaChevronRight } from "react-icons/fa";

export default function LogIn() {
    return (
        <main className={styles.logInMain}>
            <nav className={styles.breadcrumbs}>
                    <Link href="/" className={styles.homeLink}>Home </ Link>
                    <FaChevronRight />
                    <span className={styles.routeName}> Login</span>
                </nav>  
            <div className={styles.componentContainer}>
                <Login />
                <p className={styles.descriptionText}>A simple login component containing an email/password form linked
                    to a handler function sans-logic. Copy code, add as many fields to the form as you need and handle 
                    logic accordingly via the linked function. Form inputs are also controlled and the component has been 
                    styled to have a slight glow around text/inputs, feel free to remove.
                </p>
                <Link 
                    className={styles.repoLink} 
                    href="https://github.com/carledwardm/react-component-library/tree/main/components/Login"
                    target="_blank">
                        <FaChevronRight className={styles.repoChev}/> Repo Link
                </ Link>
            </div>
        </main>
    )
}