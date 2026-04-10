import styles from "./CodeBlock.module.scss";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({codeString}: {codeString: string}) {
    return (
        <SyntaxHighlighter language="jsx" style={dark} className={styles.highlighter}>
            {codeString}
        </SyntaxHighlighter>
    )
}