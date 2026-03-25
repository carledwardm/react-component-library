import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import Logo from "../../stories/assets/demo_logo.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTopRow}>
                <Link href="/" aria-label="Go to home page">
                    <Image 
                        src={Logo}
                        width={150}
                        height={100}
                        alt='"LOGO" written in green' 
                        className={styles.logoImage}
                    />
                </Link>
            <nav className={styles.footerNav} aria-label="Footer nav">
                <Link href="/" className={styles.footerNavLink}>Link 1</Link>
                <Link href="#" className={styles.footerNavLink}>Link 2</Link>
                <Link href="#" className={styles.footerNavLink}>Link 3</Link>
            </nav>
        </div>
        <div className={styles.footerBottomRow}>
            <p className={styles.footerCopyright}>© Copyright YOUR NAME HERE {new Date().getFullYear()}. All rights reserved.
            </p>
        </div>
        </footer>
    )
}