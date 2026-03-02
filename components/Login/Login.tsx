import { useState } from "react";
import styles from "./Login.module.scss";

export default function Login() {
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ userPassword, setUserPassword ] = useState<string>("");

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        // Submit logic goes here
    }

    return (
        <section className={styles.loginSection}>
                <h1 className={styles.loginTitle}>Log In</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <input type="text" className={styles.input} placeholder="Email" onChange={ e => setUserEmail(e.target.value)}></input>
                    <input type="password" className={styles.input} placeholder="Password" onChange={ e => setUserPassword(e.target.value)}></input>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </form>
                <p className={styles.signupText}>Need an account? <a href="/signup" className={styles.signupLink}>Sign up</a>!</p>
            </section>
    )
}