import './App.css';
import RandomFact from "./components/RandomFact/RandomFact";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";


function App() {
    return (
        <div>
            <Header/>
            <RandomFact/>
            <Weather/>
        </div>
    )
}

export default App;
