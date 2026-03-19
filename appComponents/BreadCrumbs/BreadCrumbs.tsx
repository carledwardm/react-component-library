"use client";
import { usePathname } from "next/navigation";
import styles from "./BreadCrumbs.module.scss";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function BreadCrumbs() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <nav className={styles.breadCrumbs}>
            <Link href="/" className={styles.homeLink}>Home</Link>{segments.map((segment, i) => (
                <span key={i} className={styles.routeName}><FaChevronRight className={styles.chev} /> 
                    <Link href={`/${segment}`} className={styles.routeLink}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link></span>
            ))}
        </nav>
    )
}