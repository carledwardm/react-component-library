"use client";
import CodeBlock from "@/appComponents/CodeBlock";
import styles from "./Toast.module.scss";
import ToastComponent from "@/components/Toast/Toast";

const toastFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Toast/Toast.tsx",
  },
  {
    name: "Module.css",
    filePath: "components/Toast/Toast.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Toast/index.tsx",
  },
];


export default function Toast() {

    const closeFunction = () => {
        return;
    }

    return (
        <main className="main">
            <section className={styles.componentsSection}>
                <h1 className={styles.pageTitle}>Toast Components</h1>
                <hr className={styles.divider} />
                <div className={styles.componentContainer}>    
                    <div className={styles.componentDisplay}>       
                        <ToastComponent message="Your toast message will go here" onClose={closeFunction} />
                    </div>  
                    <p className={styles.descriptionText}>A component that's used to display feedback messages to your user. Accepts a message, duration and 
                        a closing function. The fixed position parameter has been commented out for this demo, uncomment and
                        adjust to your liking.
                    </p>
                    <CodeBlock files={toastFiles} />
                </div>
            </section>
        </main>
    )
}