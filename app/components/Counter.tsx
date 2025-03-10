import React, { useLayoutEffect, useRef } from 'react'

import styles from './Counter.module.css';

export default function Counter({ value, text }: { value: string, text: string }) {
    const prevNumber = useRef('00');
    const counterRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        prevNumber.current = value;
    }, [value])

    return (
        <div className={styles.counterContainer}>
            <div ref={counterRef}
                className={`${styles.counter}
                ${styles.flip}`}
                key={value}
                data-current-value={prevNumber.current}
                data-next-value={value}
            >
                <div className={`${styles.clipper} ${styles.clipperLeft}`}></div>
                <div className={`${styles.clipper} ${styles.clipperRight}`}></div>
                <div className={styles.topOverlay}></div>
                <div className={styles.topNumber}>
                    {value}
                </div>
                <div className={styles.bottomNumber}>
                    {prevNumber.current}
                </div>
            </div >
            <span className={styles.counterTypeText}>{text}</span>
        </div >
    )
}
