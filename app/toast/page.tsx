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
            <div className={styles.componentContainer}>
                <Link href="/" className={styles.homeLink}>Home</ Link>
                <Toast message="Your toast message will go here" onClose={closeFunction} />
                <p className={styles.descriptionText}>A component that's used to display feedback messages to your user. Accepts a message, duration and 
                    a closing function. The fixed position parameter has been commented out for this demo, uncomment and
                    adjust to your liking.
                </p>
            </div>
        </main>
    )
}