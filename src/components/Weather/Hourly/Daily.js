const Daily = (props) => {
    let wind = (props.windSpeed[0].toFixed(2))
    let temperature = Math.round(props.dailyTemp[0])


    return (
        <div>
         {/*<p>Daily temp: {props.dailyTemp}</p>*/}
         {/*<p>Wind speed:  {props.windSpeed}</p>*/}
            <p>Today's wind: {wind}</p>
            <p>Average temperature: {temperature}</p>


        </div>
    )

}

export default Daily