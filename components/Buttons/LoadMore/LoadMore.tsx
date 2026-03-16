"use client"
import { Dispatch, SetStateAction } from "react";
import styles from "./LoadMore.module.scss";
import { FaChevronDown } from "react-icons/fa";

type loadMoreProps = {
    increaseFunction: Dispatch<SetStateAction<number>>,
    increaseAmount: number,
    size: string;
    text: string;
}

// Must pass a setter function and an increase amount to component 
export default function LoadMore({ increaseFunction, increaseAmount=0, size="small", text="Load More" }: loadMoreProps) {   
    return (
        <button 
            className={`${styles.loadMoreButton} ${styles[size]}`} 
            onClick={() => increaseFunction(prev => prev += increaseAmount)}>
                {text} <FaChevronDown className={styles.chevron}/>
        </button>
    )
}