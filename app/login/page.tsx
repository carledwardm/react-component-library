"use client";
import Link from "next/link";
import styles from "./Login.module.scss";
import Login from "@/components/Login/Login";

export default function LogIn() {
    return (
        <main className={styles.logInMain}>
            <Link href="/" className={styles.homeLink}>Home</ Link>
            <Login />
        </main>
    )
}