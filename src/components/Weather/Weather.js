// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=auto


import {useEffect, useState} from "react";
import axios from "axios";

const url = "https://api.open-meteo.com/v1/forecast"


function Weather() {
    const [post, setPost] = useState({})

    const fetchData = async (lat, lon, timezone) => {
        try {
            const res = await axios(url,
                {params: {
                    latitude: lat,
                        longitude: lon,
                        timezone,
                        hourly: 'temperature_2m,apparent_temperature,rain,showers,snowfall',
                        daily: 'weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,windspeed_10m_max',
                        current_weather: true,
                    }})
            setPost(res.data);
            console.log(`res: ${res}`)
                console.log(res.data.hourly.rain)
            console.log(  `Data hourly: ${res.data.hourly.temperature_2m}`)
            console.log(`Post: ${post.temperature_2m}`)
            console.log(`weathercode: ${res.data.daily.weathercode}`)
            console.log(`temp 2m max daily: ${post.daily.temperature_2m_max}`)
        } catch (err) {
            console.log(err)
        }
    }
    console.log(`output: ${post}`)



    useEffect(() => {
        fetchData(51.54, 46.01, Intl.DateTimeFormat().resolvedOptions().timeZone )
    }, [])


    return (

        <div>
            <h1>Weather</h1>

            <div>
                {post.hourly && (
                    <div>
                        <p>{post.timezone}</p>
                        <p>Temperature hourly: {post.hourly.temperature_2m}°C</p>
                        <p>Rain: {post.hourly.rain}</p>
                    </div>
                )}
            </div>
            <div>
                {post.daily && (
                    <div>
                        <p>Daily t {post.daily.temperature_2m_max}</p>
<p>Wind speed {post.daily.windspeed_10m_max}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Weather