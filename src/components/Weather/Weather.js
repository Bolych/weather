// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=auto


import {useEffect, useState} from "react";
import axios from "axios";
import FirstDay from "./Hourly/FirstDay";
import Daily from "./Hourly/Daily";
import SecondDay from "./Hourly/SecondDay";
import Geocode from "../Geocode/Geocode";

const url = "https://api.open-meteo.com/v1/forecast"


function Weather() {
    const [weather, setWeather] = useState('')
    const [shortLatitude, setShortLatitude] = useState('')
    const [shortLongitude, setShortLongitude] = useState('')




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

        } catch (err) {
            console.log(err)
        }
    }
    // console.log(`output: ${weather.daily.windspeed_10m_max}`)



    useEffect(() => {
        fetchData(shortLatitude, shortLongitude, Intl.DateTimeFormat().resolvedOptions().timeZone)
    }, [shortLatitude, shortLongitude])


    console.log(`passed lat: ${shortLatitude}`)

    return (

        <div>
            <h1>Weather</h1>
            <p>We detect your area as: {weather.timezone}</p>
            <Geocode setShortLatitude={setShortLatitude} setShortLongitude={setShortLongitude} />
<br/>
            <div>
                {weather.daily && (
                    <div>
                        <Daily dailyTemp={weather.daily.temperature_2m_max}
                               windSpeed={weather.daily.windspeed_10m_max}
                               dailyMinTemperature={weather.daily.temperature_2m_min}/>

                    </div>
                )}
            </div>
            <br/>
            <div>
                {weather.hourly && (
                    <div>
                        <FirstDay apparentTemp={weather.hourly.apparent_temperature} hourlyRain={weather.hourly.rain}
                                  hourlyTemp={weather.hourly.temperature_2m}
                                  hourlyShowers={weather.hourly.showers}
                                  hourlySnow={weather.hourly.snowfall}

                        />
                        <br/>
                        <SecondDay apparentTemp={weather.hourly.apparent_temperature} hourlyRain={weather.hourly.rain}
                                   hourlyTemp={weather.hourly.temperature_2m}
                                   hourlyShowers={weather.hourly.showers}
                                   hourlySnow={weather.hourly.snowfall}/>
                    </div>

                )}
            </div>
            <br/>
            <div>

            </div>




        </div>
    );
}

export default Weather