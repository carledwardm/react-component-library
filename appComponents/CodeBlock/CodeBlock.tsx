"use client";
import { useEffect, useState } from "react";
import styles from "./CodeBlock.module.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({urlString}: {urlString: string}) {
    const [code, setCode] = useState("");

    useEffect(() => {
        const fetchCode = async () => {
            const res = await fetch(urlString);
            const text = await res.text();
            setCode(text);
        }
        fetchCode();
    }, [urlString])
    return (
        <SyntaxHighlighter language="jsx" style={dark} className={styles.highLighter}>
            {code}
        </SyntaxHighlighter>
    )
}