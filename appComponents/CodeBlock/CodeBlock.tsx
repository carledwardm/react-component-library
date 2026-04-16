"use client";
import { useEffect, useState } from "react";
import styles from "./CodeBlock.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ filePath }: { filePath: string }) {
  const [code, setCode] = useState("");
  const [clipboard, setClipboard] = useState("");
  const [error, setError] = useState("");
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setClipboard(code);
      setTimeout(() => setClipboard(""), 2000);
    })
    console.log("Copying code to clipboard...");
    console.log(clipboard);
  }

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
    <>
    <SyntaxHighlighter language="tsx" style={dark} className={styles.highLighter}>
      {code || "Loading code..."}
      
    </SyntaxHighlighter>
    <svg onClick={handleCopy} focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z"></path></g></svg>
    </>
  );
}