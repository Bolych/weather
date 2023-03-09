import axios from "axios";
import {useEffect, useState} from "react";

// https://api.opencagedata.com/geocode/v1/json?key=af0e1b37c47143bab3e89eb309b85bc9&q=Frauenplan+1%2C+99423+Weimar%2C+Germany&pretty=1


const API_KEY = "af0e1b37c47143bab3e89eb309b85bc9"

const Geocode = (props) => {

    const [latitude, setLatitude] = useState('10')
const [longitude, setLongitude] = useState('10')
    const [city, setCity] = useState('Moscow');
    const URL = `https://api.opencagedata.com/geocode/v1/json?key=af0e1b37c47143bab3e89eb309b85bc9&q=${city}`


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

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleGetCoordinates()
        props.setShortLatitude(latitude)
        props.setShortLongitude(longitude)
        console.log(city)
    }, [latitude, longitude])



    return (
        <div>
            <label>
                Enter a city:
                <input type="text" value={city} onChange={handleCityChange} />
            </label>
            <button onClick={handleGetCoordinates}>Get Coordinates</button>
            {latitude && longitude && (
                <div>
                    Latitude: {latitude}<br />
                    Longitude: {longitude}
                </div>
            )}
        </div>
    )
}


// const latitude = "50° 58' 39.03816'' N";
// const regex = /(\d+)° (\d+)' ([\d.]+)''/;
// const matches = regex.exec(latitude);
// const degrees = parseInt(matches[1]);
// const minutes = parseInt(matches[2]);
// const seconds = parseFloat(matches[3]);
// const decimalDegrees = degrees + (minutes / 60) + (seconds / 3600);
// const result = decimalDegrees.toFixed(2);


export default Geocode