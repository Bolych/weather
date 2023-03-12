import './App.css';
import RandomFact from "./components/RandomFact/RandomFact";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";


function App() {


  return (
      <div>
          <Header/>

          <div>
              <RandomFact/>
          </div>
          <div>
              <Weather/>
          </div>
      </div>

  )
}

export default App;
