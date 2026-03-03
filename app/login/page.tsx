"use client";
import Link from "next/link";
import styles from "./Login.module.scss";
import Login from "@/components/Login/Login";

export default function LogIn() {
    return (
        <main className={styles.logInMain}>
            <Link href="/" className={styles.homeLink}>Home</ Link>
            <div className={styles.componentContainer}>
                <Login />
                <p className={styles.descriptionText}>A simple login component containing an email/password form linked
                    to a handler function sans-logic. Copy code, add as many fields to the form as you need and handle 
                    logic accordingly via the linked function. Form inputs are also controlled.
                </p>
            </div>
        </main>
    )
}