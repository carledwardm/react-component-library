"use client";
import { useState } from "react";
import styles from "./Signup.module.scss"; 

 
export default function SignUp() {
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ userPassword, setUserPassword ] = useState<string>("");

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
    } 

    return (
        <section className={styles.signupSection}>
                    <h1 className={styles.signupTitle}>Sign Up</h1>
                    <form className={styles.signupForm} onSubmit={handleSubmit}>
                        <input type="text" className={styles.input} placeholder="Email" onChange={ e => setUserEmail(e.target.value)}></input>
                        <input type="password" className={styles.input} placeholder="Password" onChange={ e => setUserPassword(e.target.value)}></input>
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </form>
                    <p className={styles.loginText}>Got an account? <a href="/login" className={styles.loginLink}>Log in</a>!</p>
            </section>
    )
}