// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=auto


import {useEffect, useState} from "react";
import axios from "axios";
import FirstDay from "./Hourly/FirstDay";
import Daily from "./Hourly/Daily";

const url = "https://api.open-meteo.com/v1/forecast"


function Weather() {
    const [weather, setWeather] = useState([])


    const fetchData = async (lat, lon, timezone) => {
        try {
            const res = await axios(url,
                {
                    params: {
                        latitude: lat,
                        longitude: lon,
                        timezone,
                        hourly: 'temperature_2m,apparent_temperature,rain,showers,snowfall',
                        daily: 'weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,windspeed_10m_max',
                        current_weather: true,
                    }
                })
            setWeather(res.data);

            console.log(`res: ${res}`)
            console.log(res.data.hourly.rain)
            console.log(`Data hourly: ${res.data.hourly.temperature_2m}`)
            console.log(`Post: ${res.data.daily}`)
            console.log(`weathercode: ${res.data.daily.weathercode}`)
            console.log(`wind: ${res.data.daily.windspeed_10m_max}`)
        } catch (err) {
            console.log(err)
        }
    }
    // console.log(`output: ${weather.daily.windspeed_10m_max}`)


    useEffect(() => {
        fetchData(42.87, 74.59, Intl.DateTimeFormat().resolvedOptions().timeZone)
    }, [])

    return (

        <div>
            <h1>Weather</h1>

            <div>
                {weather.hourly && (
                    <div>
                        <p>{weather.timezone}</p>
                        <FirstDay apparentTemp={weather.hourly.apparent_temperature} hourlyRain={weather.hourly.rain} hourlyTemp={weather.hourly.temperature_2m}/>

                    </div>
                )}
            </div>
            <br/>
            <div>

            </div>

            <div>
                {weather.daily && (
                    <div>
<Daily dailyTemp={weather.daily.temperature_2m_max} windSpeed={weather.daily.windspeed_10m_max} />

                    </div>
                )}
            </div>


        </div>
    );
}

export default Weather