"use client";
import Link from "next/link";
import styles from "./Buttons.module.scss";
import LoadMore from "@/components/Buttons/LoadMore";
import StandardButton from "@/components/Buttons/StandardButton";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [ count, setCount ] = useState<number>(0);
    
    return (
        <main className={styles.main}>
            <nav className={styles.breadcrumbs}>
                    <Link href="/" className={styles.homeLink}>Home </ Link>
                    <FaChevronRight className={styles.breadcrumbsChev} />
                    <span className={styles.routeName}>Buttons</span>
            </nav>  
            <section className={styles.componentsSection}>

                <h1 className={styles.pageTitle}>Button Components</h1>
                <hr className={styles.divider} />

                {/* Standard Button Component */}
                <div className={styles.componentContainer}>
                    <h2 className={styles.componentTitle}>Standard Button</h2>
                    <div className={styles.componentDisplay}>
                        <StandardButton />
                    </div>
                    <p className={styles.descriptionText}>A standard button component. Accepts a text argument
                        at this time.
                    </p>
                
                    <Link 
                        className={styles.repoLink} 
                        href="https://github.com/carledwardm/react-component-library/tree/main/components/Buttons/StandardButton"
                        target="_blank">
                            <FaChevronRight className={styles.repoChev}/> Repo Link
                    </ Link>
                </div>

                <hr className={styles.divider} />

                {/* Load More Button Component */}
                <div className={styles.componentContainer}>
                    <h2 className={styles.componentTitle}>Load More Button</h2>
                    <div className={styles.componentDisplay}>
                        <LoadMore increaseFunction={setCount} increaseAmount={1} />
                        <div className={styles.countDemo}>
                            <p className={styles.count}>Click to increase: {count}</p>
                        </div>
                    </div>
                    <p className={styles.descriptionText}>An incremental counter button designed to take a setter function for a numerical
                        count and an increase amount. It will call your supplied function when clicked - this component is meant for 
                        conditional rendering of additional UI items originally hidden from view.
                    </p>
            
                    <Link 
                        className={styles.repoLink} 
                        href="https://github.com/carledwardm/react-component-library/tree/main/components/Buttons/LoadMore"
                        target="_blank">
                            <FaChevronRight className={styles.repoChev}/> Repo Link
                    </ Link>
                </div>

            </section>
        </main>
    )
}