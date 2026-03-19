"use client";
import styles from "./Toast.module.scss";
import Toast from "@/components/Toast/Toast";
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";


export default function SignUp() {

    const closeFunction = () => {
        return;
    }

    return (
        <main className={styles.main}>
            <div className={styles.componentContainer}>    
                <div className={styles.componentDisplay}>       
                    <Toast message="Your toast message will go here" onClose={closeFunction} />
                </div>  
                <p className={styles.descriptionText}>A component that's used to display feedback messages to your user. Accepts a message, duration and 
                    a closing function. The fixed position parameter has been commented out for this demo, uncomment and
                    adjust to your liking.
                </p>
                <Link 
                    className={styles.repoLink} 
                    href="https://github.com/carledwardm/react-component-library/tree/main/components/Toast"
                    target="_blank">
                        <FaChevronRight className={styles.repoChev}/> Repo Link
                </ Link>
            </div>
        </main>
    )
}