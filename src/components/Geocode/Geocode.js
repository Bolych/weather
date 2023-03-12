import axios from "axios";
import {useEffect, useState} from "react";
import s from './Geocode.module.css'

const Geocode = (props) => {

    const [latitude, setLatitude] = useState('51.53')
const [longitude, setLongitude] = useState('46.03')
    const [city, setCity] = useState('');
    const [cityDisplayed, setCityDisplayed] = useState('Saratov')
    const URL = `https://api.opencagedata.com/geocode/v1/json?key=af0e1b37c47143bab3e89eb309b85bc9&q=${encodeURIComponent(city)}`


    const handleCityChange = (event) => {
        setCity(event.target.value);
        console.log(city)
    };

    const handleGetCoordinates = async () => {
        try {
            const res = await axios(URL, {
                params: {

                }
            })

            // get short latitude to set it in open-meteo api
            const latRegex = /(\d+)° (\d+)' ([\d.]+)'' N/;
            const latMatches = latRegex.exec(res.data.results[0].annotations.DMS.lat);
            const latDegrees = parseInt(latMatches[1]);
            const latMinutes = parseInt(latMatches[2]);
            const latSeconds = parseFloat(latMatches[3]);
            const latDecimalDegrees = latDegrees + (latMinutes / 60) + (latSeconds / 3600);
            const shortenedLatValue = latDecimalDegrees.toFixed(2);

            // get short latitude to set it in open-meteo api

            const longRegex = /(\d+)° (\d+)' ([\d.]+)'' E/;
            const longMatches = longRegex.exec(res.data.results[0].annotations.DMS.lng);
            const longDegrees = parseInt(longMatches[1]);
            const longMinutes = parseInt(longMatches[2]);
            const longSeconds = parseFloat(longMatches[3]);
            const longDecimalDegrees = longDegrees + (longMinutes / 60) + (longSeconds / 3600);
            const shortenedLongValue = longDecimalDegrees.toFixed(2);



            setLatitude(shortenedLatValue)
            setLongitude(shortenedLongValue)
            setCityDisplayed(city);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleGetCoordinates()
        props.setShortLatitude(latitude)
        props.setShortLongitude(longitude)
        setCity('');
        console.log(city)
    }, [latitude, longitude])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleGetCoordinates();
            setCity('');
        }
    };


    return (
        <div className={s.content}>
            <label>
               <span className='bold'>Enter city:</span>
                <input className={s.inputCity} type="text" value={city} onChange={handleCityChange} onKeyDown={handleKeyPress} />
            </label>
            <button className={s.geocodeButton} onClick={handleGetCoordinates}>Get Coordinates</button>
            {latitude && longitude && (
                <div className='bold'>
                    <p>Current place: {cityDisplayed}</p>
                    Latitude: {latitude}<br />
                    Longitude: {longitude}
                </div>
            )}
        </div>
    )
}




export default Geocode