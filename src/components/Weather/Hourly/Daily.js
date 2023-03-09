const Daily = (props) => {
    let wind = (props.windSpeed[0].toFixed(2))
    let temperatureMax = Math.round(props.dailyTemp[0])
    let temperatureMin = Math.round(props.dailyMinTemperature[0])



    return (
        <div>
         {/*<p>Daily temp: {props.dailyTemp}</p>*/}
         {/*<p>Wind speed:  {props.windSpeed}</p>*/}
            <p>Today's wind: {wind}</p>
            <p>Today's temperature: {temperatureMin} - {temperatureMax}</p>
        </div>
    )

}

export default Daily