import {useEffect, useState} from "react";

function Time() {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setDateTime(now.toString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>{dateTime}</p>
        </div>
    );
}

export default Time;