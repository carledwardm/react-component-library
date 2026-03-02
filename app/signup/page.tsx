"use client";
import styles from "./Signup.module.scss";
import Signup from "@/components/Signup/Signup";

export default function SignUp() {
    return (
        <main className={styles.signUpMain}>
            <Signup />
        </main>
    )
}