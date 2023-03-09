import s from './Hourly.module.css'
import {useEffect, useState} from "react";


const SecondDay = (props) => {

        const [currentDate, setCurrentDate] = useState("");

        useEffect(() => {
            // Get the current date
            const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            // Get the current date
            const currentDateObj = new Date();

            // Extract the day of the week, month, day, and year
            const dayOfWeek = currentDateObj.getDay() + 1 ;
            const month = String(currentDateObj.getMonth() + 1).padStart(2, "0"); // Ensure month has two digits
            const day = currentDateObj.getDate() + 1;
            const year = currentDateObj.getFullYear();

            // Get the name of the current day
            const currentDayName = dayNames[dayOfWeek];

            // Format the date string
            const formattedDate = `${currentDayName}, ${month}/${day}/${year}`;
            // Set the state with the formatted date
            setCurrentDate( formattedDate);
        }, []);




    return (
        <div>
            <p>Tomorrow: {currentDate}</p>
            <div className={s.table}>
                <ul className={s.time}>
                    <li>Time</li>
                    {props.hourlyTemp.slice(24, 48).map((item, index) => (
                        <li key={index}>{`${("0" + index).slice(-2)}:00`}</li>
                    ))}
                </ul>
                <ul className={s.temperature}>
                    <li>Temperature</li>
                    {props.hourlyTemp.slice(24, 48).map((item, index) => (
                        <li key={index}> {item}</li>
                    ))}
                </ul>

                <ul className={s.apparent}>
                    <li>Feels like</li>
                    {props.apparentTemp.slice(24, 48).map((item, index) => (
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

export default SecondDay
