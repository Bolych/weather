import s from './Hourly.module.css'
import {useEffect, useState} from "react";


const FirstDay = (props) => {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        // get component's date
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDateObj = new Date();
        const dayOfWeek = currentDateObj.getDay() ;
        const month = String(currentDateObj.getMonth() + 1).padStart(2, "0"); // Ensure month has two digits
        const day = currentDateObj.getDate();
        const year = currentDateObj.getFullYear();
        const currentDayName = dayNames[dayOfWeek];
        const formattedDate = `${currentDayName}, ${month}/${day}/${year}`;
        setCurrentDate(formattedDate);
    }, []);






    return (
        <div>
            <p>Today: {currentDate}</p>

            <div className={s.table}>
            <ul className={s.time}>
                <li>Time</li>
                {props.hourlyTemp.slice(0, 24).map((item, index) => (
                    <li key={index}>{`${("0" + index).slice(-2)}:00`}</li>
                ))}
            </ul>
            <ul className={s.temperature}>
                <li>Temperature</li>
                {props.hourlyTemp.slice(0, 24).map((item, index) => (
                    <li key={index}> {item}</li>
                ))}
            </ul>

                <ul className={s.apparent}>
                    <li>Feels like</li>
                    {props.apparentTemp.slice(0, 24).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            <ul className={s.rain}>
                <li>Rain</li>
                {props.hourlyRain.slice(0, 24).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>


            </div>

        </div>

    )

}

export default FirstDay