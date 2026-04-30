"use client";
import styles from "./Footer.module.scss";
import FooterComponent from "@/components/Footer/Footer";
import CodeBlock from "@/appComponents/CodeBlock/CodeBlock";

const footerFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Footer/Footer.tsx",
  },
  {
    name: "Module.css",
    filePath: "components/Footer/Footer.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Footer/index.tsx",
  },
];

export default function Footer() {
    return (
        <main className="main">
            <section className={styles.componentsSection}>
                <h1 className={styles.pageTitle}>Footer Components</h1>
                <hr className={styles.divider} />
                <div className={styles.componentContainer}>
                    <div className={styles.componentDisplay}>
                        <FooterComponent />
                    </div>
                    <p className={styles.descriptionText}>A footer component currently displaying a demo logo, 3 default
                        links and a copyright with a dynamix year added.
                    </p>
                    <CodeBlock files={footerFiles} />
                </div>  
            </section>
        </main>
    )
}