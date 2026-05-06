"use client";
import CodeBlock from "@/appComponents/CodeBlock/CodeBlock";
import styles from "./Signup.module.scss";
import Signup from "@/components/Signup/Signup";

const signupFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Signup/Signup.tsx",
  },
  {
    name: "Module.css",
    filePath: "components/Signup/Signup.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Signup/index.tsx",
  },
];

export default function SignUp() {
    return (
        <main className="main">
            <section className={styles.componentsSection}>
                <div className={styles.pageTitleContainer}>
                    <h1 className={styles.pageTitle}>Signup Components</h1>
                    <hr className={styles.divider} />
                </div>
                <div className={styles.componentContainer}>
                    <div className={styles.componentDisplay}>
                        <Signup />
                    </div>
                    <p className={styles.descriptionText}>A simple signup component containing an email/password form linked
                        to a handler function sans-logic. Copy code, add as many fields to the form as you need and handle 
                        logic accordingly via the linked function. Form inputs are also controlled and the component has been 
                        styled to have a slight glow around text/inputs, feel free to remove.
                    </p>
                    <CodeBlock files={signupFiles} />
                </div>
            </section>
        </main>
    )
}