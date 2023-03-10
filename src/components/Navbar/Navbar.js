import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [currentDate, setCurrentDate] = useState("");



    useEffect(() => {
        // get component's date

    }, []);


    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDateObj = new Date();
    const dayOfWeek = currentDateObj.getDay();
    const month = String(currentDateObj.getMonth() + 1).padStart(2, "0"); // Ensure month has two digits
    const currentDayName = dayNames[dayOfWeek];
    const day = currentDateObj.getDate();



console.log(currentDate)

    return (
        <div>
            <ul>
                <li><NavLink to="today">Today</NavLink></li>
                <li><NavLink to="tomorrow">{dayNames[dayOfWeek + 1]} {day+ 1}/{month}</NavLink></li>
                <li><NavLink to="3">{dayNames[dayOfWeek + 2]} {day+ 2}/{month}</NavLink></li>
                <li><NavLink to="4">{dayNames[dayOfWeek + 3]} {day+ 3}/{month}</NavLink></li>
                <li><NavLink to="5">{dayNames[dayOfWeek + 4]} {day+ 4}/{month}</NavLink></li>
                <li><NavLink to="6">{dayNames[dayOfWeek + 5]} {day+ 5}/{month}</NavLink></li>
                <li><NavLink to="7">{dayNames[dayOfWeek + 6]} {day+ 6}/{month}</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar


