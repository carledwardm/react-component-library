import Image from "next/image";
import Link from "next/link";
import Styles from "./Header.module.scss";
import Logo from "../../stories/assets/demo_logo.png";
// use your own logo image/path

export default function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.logoContainer}>
                <Image 
                    src={Logo}
                    width={300}
                    height={200}
                    alt='"LOGO" written in green' 
                    className={Styles.logoImage}
                />
            </div>
            <nav className={Styles.headerNav}>
                <Link href="" className={Styles.headerLink}>Home</ Link>
                <Link href="" className={Styles.headerLink}>About</ Link>
                <Link href="" className={Styles.headerLink}>Services</ Link>
                <Link href="" className={Styles.headerLink}>Contact</ Link>
            </nav>
        </header>
    )
}