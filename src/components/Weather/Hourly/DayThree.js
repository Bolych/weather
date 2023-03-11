import s from './Hourly.module.css'
import {useEffect, useState} from "react";
import WeatherImage from "../WeatherImage";


const DayThree = (props) => {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        // get component's date
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDateObj = new Date();
        const dayOfWeek = currentDateObj.getDay();
        const month = String(currentDateObj.getMonth() + 1).padStart(2, "0"); // Ensure month has two digits
        const day = currentDateObj.getDate() + 2;
        const year = currentDateObj.getFullYear();
        const currentDayName = dayNames[dayOfWeek];
        const formattedDate = `${currentDayName}, ${month}/${day}/${year}`;
        setCurrentDate(formattedDate);
    }, []);

    return (


        <div>
            <p>Today: {currentDate}</p>
            {/*            Made split because i didn't like initial time format*/}
            <p>Sunrise: {props.sunrise[2].split("T")[1]}</p>
            <p>Sunset: {props.sunset[2].split("T")[1]}</p>
            <WeatherImage weatherImage={props.weathercodeDaily[2]}/>



            {/*Don't like tables, made table this way*/}
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