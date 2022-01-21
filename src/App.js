import logo from './selfie.png';
import './App.css';
import { Navigation, Carouseller } from './components'


function App() {
  return (
    <>
    <Navigation />
    <br />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Claude Mokbel
        </p>
      </header>
    </div>
    <br />
    <h1>Portfolio</h1>
    <div id="portfolio" className="container-fluid">
    <Carouseller />
    </div>
    <div id="resume">

    </div>
  </>
  );
}

export default App;
