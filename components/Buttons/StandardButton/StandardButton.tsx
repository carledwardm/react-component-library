import styles from "./StandardButton.module.scss";

type StandardButtonProps = {
    primary: boolean;
    text?: string;
}

export default function StandardButton({ text="Default text", primary=false} : StandardButtonProps) {
    return (
        <button className={styles.button}>{text}</button>
    )
}