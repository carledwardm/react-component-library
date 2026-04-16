"use client";
import { useEffect, useState } from "react";
import styles from "./CodeBlock.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ filePath }: { filePath: string }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const res = await fetch(`/api/code?file=${encodeURIComponent(filePath)}`);
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        const text = await res.text();
        setCode(text);
      } catch (err) {
        setError(`Unable to load code: ${(err as Error).message}`);
        console.log(err);
      }
    };

    fetchCode();
  }, [filePath]);

  if (error) {
    return <pre className={styles.highLighter}>{error}</pre>;
  }

  return (
    <SyntaxHighlighter language="tsx" style={dark} className={styles.highLighter}>
      {code || "Loading code..."}
    </SyntaxHighlighter>
  );
}