"use client"
import { Dispatch, SetStateAction } from "react";
import styles from "./LoadMore.module.scss";
import { FaChevronDown } from "react-icons/fa";

type loadMoreProps = {
    increaseFunction: Dispatch<SetStateAction<number>>,
    increaseAmount: number,
}

// Must pass a setter function and an increase amount to component 
export default function LoadMore({ increaseFunction, increaseAmount=0}: loadMoreProps) {   
    return (
        <button 
            className={styles.loadMoreButton} 
            onClick={() => increaseFunction(prev => prev += increaseAmount)}>
                Show More <FaChevronDown className={styles.chevron}/>
        </button>
    )
}