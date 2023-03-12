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
        case 0:
        case 2:
            imageUrl = sunny;
            break;
            break;
        case 1:
        case 3:
            imageUrl = cloudy;
            break;
        case 13:
        case 29:
            imageUrl = thunderstormoverclouds;
            break;
        case 20:
            imageUrl = lightsnowclouds;
            break
        case 21:
        case 24:
            imageUrl = lightrain
            break
        case 22:
            imageUrl = lightsnowclouds;
            break
        case 23:
            imageUrl = passingshower;
            break
        case 25:
        case 27:
            imageUrl = heavyrainovercast;
            break
        case 26:
            imageUrl = heavysnowovercast;
            break
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59 :
            imageUrl = lightrain;
            break;
        case 10:
        case 11:
        case 12:
        case 28:
        case 40:
        case 41:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49 :
            imageUrl = fog;
            break;
        case  60:
        case 61:
        case 66:
            imageUrl = passingshower
            break;
        case 62:
        case 63:
        case 67:
            imageUrl = lightrain
            break;
        case 64:
        case 65:
            imageUrl = heavyrainovercast
            break;
        case 70:
        case 71 :
            imageUrl = lightsnowclouds;
            break;
        case  72:
        case 73:
        case 74:
        case 75:
        case 77:
            imageUrl = heavysnowovercast;
            break;
        case  80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
            imageUrl = thunderstormoverclouds
            break;

        default:
            imageUrl = 'unknown.jpg';
    }
    console.log(`image path: ${imageUrl}`)

    return <img src={imageUrl} alt="_"/>;
}


export default WeatherImage