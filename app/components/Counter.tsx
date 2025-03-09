import React from 'react'

import styles from './Counter.module.css';

export default function Counter({ value, text }: { value: string, text: string }) {
    return (
        <div className={styles.counterContainer}>
            <div className={styles.counter}>
                <div className={`${styles.clipper} ${styles.clipperLeft}`}></div>
                <div className={`${styles.clipper} ${styles.clipperRight}`}></div>
                <div className={styles.overlay}></div>
                <span>
                    {value}
                </span>
            </div>
            <span className={styles.counterTypeText}>{text}</span>
        </div>
    )
}
