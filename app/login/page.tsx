"use client";
import styles from "./Login.module.scss";
import Login from "@/components/Login/Login";

export default function LogIn() {
    return (
        <main className={styles.logInMain}>
            <Login />
        </main>
    )
}