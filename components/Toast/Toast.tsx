"use client";
import styles from "./Toast.module.scss";
import { useEffect, useState } from 'react';

interface toastProps {
    message: string;
    duration?: number;
    onClose: () => void;
}

// Accepts a toast message, duration and an onClose function 
export default function Toast({message, duration=0, onClose}: toastProps) {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
        }
    }, [duration, onClose]);
    // If duration <= 0, nothing happens, component will stay visible
    return <div className={styles.Toast}>    
        {message}
    </div>
}