import { useEffect, useState } from "react"

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 11)
const launchTime = (new Date(currentDate)).getTime();

const padNumber = (num: number) => {
    return String(num).padStart(2, '0');
}

const getRemainingTime = () => {
    const currentTime = (new Date()).getTime();
    const remainingTime = launchTime - currentTime;
    const seconds = padNumber(Math.floor((remainingTime / 1000) % 60));
    const minutes = padNumber(Math.floor((remainingTime / (1000 * 60)) % 60));
    const hours = padNumber(Math.floor((remainingTime / (1000 * 60 * 60)) % 24));
    const days = padNumber(Math.floor((remainingTime / (1000 * 60 * 60 * 24))));
    return {
        days,
        hours,
        minutes,
        seconds
    }
}

export default function useCountdown() {
    const [remainingTime, setRemainingTime] = useState(() => getRemainingTime());

    useEffect(() => {
        const remainingTimeInterval = setInterval(() => {
            setRemainingTime(getRemainingTime);
        }, 1000);

        return () => clearInterval(remainingTimeInterval);
    }, []);

    return remainingTime;
}
