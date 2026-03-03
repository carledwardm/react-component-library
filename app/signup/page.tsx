"use client";
import styles from "./Signup.module.scss";
import Signup from "@/components/Signup/Signup";
import Link from 'next/link';

export default function SignUp() {
    return (
        <main className={styles.signUpMain}>
            <Link href="/" className={styles.homeLink}>Home</ Link>
            <div className={styles.componentContainer}>
                <Signup />
                <p className={styles.descriptionText}>A simple signup component containing an email/password form linked
                    to a handler function sans-logic. Copy code, add as many fields to the form as you need and handle 
                    logic accordingly via the linked function. Form inputs are also controlled.
                </p>
            </div>
        </main>
    )
}