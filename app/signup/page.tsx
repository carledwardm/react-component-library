"use client";
import styles from "./Signup.module.scss";
import Signup from "@/components/Signup/Signup";
import Link from 'next/link';

export default function SignUp() {
    return (
        <main className={styles.signUpMain}>
            <Link href="/" className={styles.homeLink}>Home</ Link>
            <Signup />
        </main>
    )
}