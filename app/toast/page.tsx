"use client";
import styles from "./Toast.module.scss";
import Toast from "@/components/Toast/Toast";
import Link from 'next/link';

export default function SignUp() {

    const closeFunction = () => {
        return;
    }

    return (
        <main className={styles.toastMain}>
            <Link href="/" className={styles.homeLink}>Home</ Link>
            <Toast message="Default text" onClose={closeFunction} />
        </main>
    )
}