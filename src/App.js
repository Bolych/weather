import './App.css';

import RandomFact from "./components/RandomFact/RandomFact";
import Time from "./components/Time/Time";
import Weather from "./components/Weather/Weather";


function App() {

  return (
      <div>
          <div>
              <Time/>
          </div>
          <div>
              <RandomFact/>
          </div>

          <div>
              <Weather/>
          </div>
<br/>
<br/>
<br/>


      </div>

  )
}

export default App;
