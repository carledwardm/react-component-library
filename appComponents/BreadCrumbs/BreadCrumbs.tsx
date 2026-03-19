"use client";
import { usePathname } from "next/navigation";
import styles from "./BreadCrumbs.module.scss";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function BreadCrumbs() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    let cumulativePath = "";

    return (
        <nav className={styles.breadCrumbs}>
            <Link href="/" className={styles.homeLink}>Home</Link>{segments.map((segment, i) => {
                cumulativePath += `${segment}/`;
                return (
                <span key={i} className={styles.routeName}><FaChevronRight className={styles.chev} /> 
                    <Link href={`/${cumulativePath}`} className={styles.routeLink}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link>
                </span>
                )
            })}
        </nav>
    )
}