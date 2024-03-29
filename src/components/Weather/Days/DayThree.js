import s from './Days.module.css'
import {useEffect, useState} from "react";
import WeatherImage from "../WeatherImage";


const DayThree = (props) => {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        // get component's date
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDateObj = new Date();
        const dayOfWeek = currentDateObj.getDay() + 2;
        const month = String(currentDateObj.getMonth() + 1).padStart(2, "0"); // Ensure month has two digits
        const day = currentDateObj.getDate() + 2;
        const year = currentDateObj.getFullYear();
        const currentDayName = dayNames[dayOfWeek];
        const formattedDate = `${currentDayName}, ${day}/${month}/${year}`;
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div>
            <div className={s.dailyHeader}>
                <div className={s.dailyHeaderText}>
                    <p>{currentDate}</p>
                    <p>Sunrise: {props.sunrise[2].split("T")[1]}</p>
                    <p>Sunset: {props.sunset[2].split("T")[1]}</p>
                </div>
                <div className={s.weatherImage}>
                    <WeatherImage weatherImage={props.weathercodeDaily[0]}/>
                </div>
            </div>

            <div className={s.tableBody}>

                <div className={s.timeTempBlock}>
                    <ul className={s.timeTempBlockTime}>
                        <li>Time</li>
                        {props.hourlyTemp.slice(48, 72).map((item, index) => (
                            <li key={index}>{`${("0" + index).slice(-2)}:00`}</li>
                        ))}
                    </ul>
                    <ul className={s.timeTempBlockTemperature}>
                        <li>Temperature</li>
                        {props.hourlyTemp.slice(48, 72).map((item, index) => (
                            <li key={index}> {item} °C</li>
                        ))}
                    </ul>
                </div>

                <div className={s.comfortBlock}>
                    <ul className={s.apparent}>
                        <li>Feels like</li>
                        {props.apparentTemp.slice(48, 72).map((item, index) => (
                            <li key={index}>{item} °C</li>
                        ))}
                    </ul>
                    <ul className={s.windspeed}>
                        <li>Wind</li>
                        {props.hourlyWind.slice(48, 72).map((item, index) => (
                            <li key={index}>{item} km/h</li>
                        ))}
                    </ul>
                    <ul className={s.humidity}>
                        <li>Humidity</li>
                        {props.humidity.slice(48, 72).map((item, index) => (
                            <li key={index}>{item}%</li>
                        ))}
                    </ul>
                </div>

                <div className={s.precipitationsBlock}>
                    <ul className={s.precipitationsProbability}>
                        <li>Precipitations probability</li>
                        {props.precipitationProbability.slice(0, 24).map((item, index) => (
                            <li key={index}>{item}%</li>
                        ))}
                    </ul>
                    <ul className={s.precipitationsAmount}>
                        <li>Precipitations amount</li>
                        {props.precipitation.slice(48, 72).map((item, index) => (
                            <li key={index}>{item} mm</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DayThree