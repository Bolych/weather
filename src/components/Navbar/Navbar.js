import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <ul>
                <li><NavLink to="dayone">Today</NavLink></li>
                <li><NavLink to="daytwo">Tomorrow</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar


