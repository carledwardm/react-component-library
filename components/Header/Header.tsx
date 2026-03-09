import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "../../stories/assets/demo_logo.png";
// use your own logo image/path

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image 
                    src={Logo}
                    width={300}
                    height={200}
                    alt='"LOGO" written in green' 
                    className={styles.logoImage}
                />
            </div>
            <nav className={styles.headerNav}>
                <Link href="" className={styles.headerLink}>Home</ Link>
                <Link href="" className={styles.headerLink}>About</ Link>
                <Link href="" className={styles.headerLink}>Services</ Link>
                <Link href="" className={styles.headerLink}>Contact</ Link>
            </nav>
        </header>
    )
}