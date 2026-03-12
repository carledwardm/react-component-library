import styles from "./StandardButton.module.scss";

export default function StandardButton(text="Default text") {
    return (
        <button className={styles.button}>{text}</button>
    )
}