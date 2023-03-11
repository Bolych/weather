


import brokenCloudsImg from "../../images/condition-icons/brokenclouds.png"
import clearnight from "../../images/condition-icons/clearnight.png"
import clouds from "../../images/condition-icons/clouds.png"
import cloudy from "../../images/condition-icons/cloudy.png"
import darkcloud from "../../images/condition-icons/darkcloudy.png"
import fog from "../../images/condition-icons/fog.png"
import heavyrainovercast from "../../images/condition-icons/heavyrainovercast.png"
import heavysnowovercast from "../../images/condition-icons/heavysnowovercast.png"
import lightrain from "../../images/condition-icons/lightrain.png"
import lightsnowclouds from "../../images/condition-icons/lightsnowclouds.png"
import mixtureovercast from "../../images/condition-icons/mixtureovercast.png"
import moonpassingclous from "../../images/condition-icons/moonpassingclous.png"
import mostlycloudy from "../../images/condition-icons/mostlycloudy.png"
import nightpassingclouds from "../../images/condition-icons/nightpassingclouds.png"
import overcast from "../../images/condition-icons/overcast.png"
import passingshower from "../../images/condition-icons/passingshower.png"
import snowcloudy from "../../images/condition-icons/snowcloudy.png"
import sunny from "../../images/condition-icons/sunny.png"
import thunderstormoverclouds from "../../images/condition-icons/thunderstormoverclouds.png"
// import  from ""



console.log(`imported image:  ${clouds}`)

function WeatherImage(props) {

    console.log(` weather codes: ${props.weatherImage}`)

    // below values that corresponds to WMO codes accepted from API. WMO codes you can find in web

    let imageUrl;
    switch (props.weatherImage) {
        case 0 || 2:
            imageUrl = sunny;
            break;
        case 3:
            imageUrl = cloudy;
            break;
        case 1 || 3:
            imageUrl = cloudy;
            break;
        case 13 || 29:
            imageUrl = thunderstormoverclouds;
            break;
        case 20:
            imageUrl = lightsnowclouds;
            break
        case 21 || 24:
            imageUrl = lightrain
            break
        case 22:
            imageUrl = lightsnowclouds;
            break
        case 23:
            imageUrl = passingshower;
            break
        case 25 || 27:
            imageUrl = heavyrainovercast;
            break
        case 26:
            imageUrl = heavysnowovercast;
            break
        case 50 || 51 || 52 || 53 || 54 || 55 || 56 || 57 || 58 || 59 :
            imageUrl = lightrain;
            break;
        case 10 || 11|| 12 || 28 || 40 || 41 || 41 || 43 || 44 || 45 || 46 || 47 || 48 || 49 :
            imageUrl = fog;
            break;
        case 60 || 61 || 66:
            imageUrl = passingshower
            break;
        case 62 || 63 || 67:
            imageUrl = lightrain
            break;
        case 64 || 65:
            imageUrl = heavyrainovercast
            break;
        case 70 || 71 :
            imageUrl = lightsnowclouds;
            break;
        case  72 || 73 || 74 || 75 || 77:
            imageUrl = heavysnowovercast;
            break;
        case  80|| 81 || 82 || 83 || 84 || 85 || 86 || 87 || 88 || 89 || 90 || 91 || 92 || 93 || 94 || 95 || 96 || 97 || 98 || 99:
            imageUrl = thunderstormoverclouds
            break;

        default:
            imageUrl = 'unknown.jpg';
    }
    console.log(`image path: ${imageUrl}`)

    return <img src={imageUrl} alt="_"/>;
}



export default WeatherImage