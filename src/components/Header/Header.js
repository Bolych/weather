import s from './Header.module.css'
import Time from "../Time/Time";


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.time}>
<Time/>
            </div>
        </div>

    )

}

export default Header