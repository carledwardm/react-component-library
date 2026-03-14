"use client";
import styles from "./Signup.module.scss";
import Signup from "@/components/Signup/Signup";
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

export default function SignUp() {
    return (
        <main className={styles.signUpMain}>
            <nav className={styles.breadcrumbs}>
                    <Link href="/" className={styles.homeLink}>Home </ Link>
                    <FaChevronRight />
                    <span className={styles.routeName}> Signup</span>
                </nav>  
            <div className={styles.componentContainer}>
                <div className={styles.componentDisplay}>
                    <Signup />
                </div>
                <p className={styles.descriptionText}>A simple signup component containing an email/password form linked
                    to a handler function sans-logic. Copy code, add as many fields to the form as you need and handle 
                    logic accordingly via the linked function. Form inputs are also controlled and the component has been 
                    styled to have a slight glow around text/inputs, feel free to remove.
                </p>
                <Link 
                    className={styles.repoLink} 
                    href="https://github.com/carledwardm/react-component-library/tree/main/components/Signup"
                    target="_blank">
                        <FaChevronRight className={styles.repoChev}/> Repo Link
                </ Link>
            </div>
        </main>
    )
}