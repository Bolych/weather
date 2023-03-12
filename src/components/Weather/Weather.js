import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import s from "./Weather.module.css"


import DayOne from "./Days/DayOne";
import DayTwo from "./Days/DayTwo";
import Geocode from "../Geocode/Geocode";
import Navbar from "../Navbar/Navbar";
import DayThree from "./Days/DayThree";
import DayFour from "./Days/DayFour";
import DayFive from "./Days/DayFive";
import DaySix from "./Days/DaySix";
import DaySeven from "./Days/DaySeven";


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
                        hourly: 'temperature_2m,apparent_temperature,precipitation,precipitation_probability,windspeed_10m,relativehumidity_2m,cloudcover,weathercode',
                        daily: 'weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,windspeed_10m_max,sunrise,sunset,weathercode,shortwave_radiation_sum',
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


    return (

        <div className={s.content}>

            <div className={s.wrapperBeforeDailyForecast}>

                <p className='bold'>We detected your area as: {weather.timezone}</p>
                <br/>
                <h3>How to use this app?</h3>
                <p className='bold'>Type the place in the input field and get weather data about it.</p>
                <p> You can type just city name, or specify place. You can also type address on local language. Register
                    doesn't matter.</p>

                <p>Correctly examples:</p>

                <div className='examples'>
                    <p> 1. Trierer Straße 15, 99423, Weimar, Deutschland.
                    </p>
                    <p> 2. Russia, Saratov, Vyazovka
                    </p>
                    <p>3. Thành phố Hà Nội</p>
                    <p>4. barcelona</p>
                </div>


                <Geocode setShortLatitude={setShortLatitude} setShortLongitude={setShortLongitude}/>
                <br/>
                <div>
                    <Navbar/>
                </div>
            </div>


            <div>
                {weather.hourly && (
                    <div>
                        <Routes>
                            <Route path='/weather' element={<DayOne apparentTemp={weather.hourly.apparent_temperature}
                                                                    hourlyRain={weather.hourly.rain}
                                                                    hourlyTemp={weather.hourly.temperature_2m}
                                                                    hourlyWind={weather.hourly.windspeed_10m}
                                                                    precipitation={weather.hourly.precipitation}
                                                                    precipitationProbability={weather.hourly.precipitation_probability}
                                                                    sunrise={weather.daily.sunrise}
                                                                    sunset={weather.daily.sunset}
                                                                    weathercodeDaily={weather.daily.weathercode}
                                                                    humidity={weather.hourly.relativehumidity_2m}
                            />}/>

                            <Route path='today' element={<DayOne apparentTemp={weather.hourly.apparent_temperature}
                                                                 hourlyRain={weather.hourly.rain}
                                                                 hourlyTemp={weather.hourly.temperature_2m}
                                                                 hourlyWind={weather.hourly.windspeed_10m}
                                                                 precipitation={weather.hourly.precipitation}
                                                                 precipitationProbability={weather.hourly.precipitation_probability}
                                                                 weathercodeHourly={weather.hourly.weathercode}
                                                                 weathercodeDaily={weather.daily.weathercode}

                                                                 sunrise={weather.daily.sunrise}
                                                                 sunset={weather.daily.sunset}
                                                                 humidity={weather.hourly.relativehumidity_2m}
                            />}/>

                            <Route path="tomorrow" element={<DayTwo apparentTemp={weather.hourly.apparent_temperature}
                                                                    hourlyRain={weather.hourly.rain}
                                                                    hourlyTemp={weather.hourly.temperature_2m}
                                                                    hourlyWind={weather.hourly.windspeed_10m}
                                                                    precipitation={weather.hourly.precipitation}
                                                                    precipitationProbability={weather.hourly.precipitation_probability}
                                                                    sunrise={weather.daily.sunrise}
                                                                    sunset={weather.daily.sunset}
                                                                    humidity={weather.hourly.relativehumidity_2m}
                                                                    weathercodeHourly={weather.hourly.weathercode}
                                                                    weathercodeDaily={weather.daily.weathercode}
                            />}/>

                            <Route path="3" element={<DayThree apparentTemp={weather.hourly.apparent_temperature}
                                                               hourlyRain={weather.hourly.rain}
                                                               hourlyTemp={weather.hourly.temperature_2m}
                                                               hourlyWind={weather.hourly.windspeed_10m}
                                                               precipitation={weather.hourly.precipitation}
                                                               precipitationProbability={weather.hourly.precipitation_probability}
                                                               sunrise={weather.daily.sunrise}
                                                               sunset={weather.daily.sunset}
                                                               humidity={weather.hourly.relativehumidity_2m}
                                                               weathercodeHourly={weather.hourly.weathercode}
                                                               weathercodeDaily={weather.daily.weathercode}
                            />}/>

                            <Route path="4" element={<DayFour apparentTemp={weather.hourly.apparent_temperature}
                                                              hourlyRain={weather.hourly.rain}
                                                              hourlyTemp={weather.hourly.temperature_2m}
                                                              hourlyWind={weather.hourly.windspeed_10m}
                                                              precipitation={weather.hourly.precipitation}
                                                              precipitationProbability={weather.hourly.precipitation_probability}
                                                              sunrise={weather.daily.sunrise}
                                                              sunset={weather.daily.sunset}
                                                              humidity={weather.hourly.relativehumidity_2m}
                                                              weathercodeHourly={weather.hourly.weathercode}
                                                              weathercodeDaily={weather.daily.weathercode}
                            />}/>

                            <Route path="5" element={<DayFive apparentTemp={weather.hourly.apparent_temperature}
                                                              hourlyRain={weather.hourly.rain}
                                                              hourlyTemp={weather.hourly.temperature_2m}
                                                              hourlyWind={weather.hourly.windspeed_10m}
                                                              precipitation={weather.hourly.precipitation}
                                                              precipitationProbability={weather.hourly.precipitation_probability}
                                                              sunrise={weather.daily.sunrise}
                                                              sunset={weather.daily.sunset}
                                                              humidity={weather.hourly.relativehumidity_2m}
                                                              weathercodeHourly={weather.hourly.weathercode}
                                                              weathercodeDaily={weather.daily.weathercode}
                            />}/>

                            <Route path="6" element={<DaySix apparentTemp={weather.hourly.apparent_temperature}
                                                             hourlyRain={weather.hourly.rain}
                                                             hourlyTemp={weather.hourly.temperature_2m}
                                                             hourlyWind={weather.hourly.windspeed_10m}
                                                             precipitation={weather.hourly.precipitation}
                                                             precipitationProbability={weather.hourly.precipitation_probability}
                                                             sunrise={weather.daily.sunrise}
                                                             sunset={weather.daily.sunset}
                                                             humidity={weather.hourly.relativehumidity_2m}
                                                             weathercodeHourly={weather.hourly.weathercode}
                                                             weathercodeDaily={weather.daily.weathercode}
                            />}/>

                            <Route path="7" element={<DaySeven apparentTemp={weather.hourly.apparent_temperature}
                                                               hourlyRain={weather.hourly.rain}
                                                               hourlyTemp={weather.hourly.temperature_2m}
                                                               hourlyWind={weather.hourly.windspeed_10m}
                                                               precipitation={weather.hourly.precipitation}
                                                               precipitationProbability={weather.hourly.precipitation_probability}
                                                               sunrise={weather.daily.sunrise}
                                                               sunset={weather.daily.sunset}
                                                               humidity={weather.hourly.relativehumidity_2m}
                                                               weathercodeHourly={weather.hourly.weathercode}
                                                               weathercodeDaily={weather.daily.weathercode}
                            />}/>

                        </Routes>
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