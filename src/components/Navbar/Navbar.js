import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


const Navbar = () => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDateObj = new Date();
    const dayOfWeek = currentDateObj.getDay();
    const month = String(currentDateObj.getMonth() + 1).padStart(2, "0");
    const day = currentDateObj.getDate();

    return (
        <div>
            <ul className={s.navbar}>
                <li><NavLink to="today">Today {day}/{month}</NavLink></li>
                <li><NavLink to="tomorrow">{dayNames[dayOfWeek + 1].slice(0, 3)} {day + 1}/{month}</NavLink></li>
                <li><NavLink to="3">{dayNames[dayOfWeek + 2].slice(0, 3)} {day + 2}/{month}</NavLink></li>
                <li><NavLink to="4">{dayNames[dayOfWeek + 3].slice(0, 3)} {day + 3}/{month}</NavLink></li>
                <li><NavLink to="5">{dayNames[dayOfWeek + 4].slice(0, 3)} {day + 4}/{month}</NavLink></li>
                <li><NavLink to="6">{dayNames[dayOfWeek + 5].slice(0, 3)} {day + 5}/{month}</NavLink></li>
                <li><NavLink to="7">{dayNames[dayOfWeek + 6].slice(0, 3)} {day + 6}/{month}</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar


