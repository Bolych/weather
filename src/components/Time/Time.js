import {useEffect, useState} from "react";

function Time() {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Current Date and Time</h1>
            <p>{dateTime}</p>
        </div>
    );
}

export default Time;