import styles from "./StandardButton.module.scss";

type StandardButtonProps = {
    text?: string;
}

export default function StandardButton({ text="Default text"} : StandardButtonProps) {
    return (
        <button className={styles.button}>{text}</button>
    )
}