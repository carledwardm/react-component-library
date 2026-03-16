import styles from "./StandardButton.module.scss";

type StandardButtonProps = {
    primary: boolean;
    size: string;
    text: string;
}

export default function StandardButton({  primary=false, size="small", text="Default text"} : StandardButtonProps) {
    return (
        <button className={styles.button}>{text}</button>
    )
}