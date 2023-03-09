import s from './Hourly.module.css'


const FirstDay = (props) => {

    return (
        <div>
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