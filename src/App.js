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
        <h1>
          Claude Mokbel
        </h1>
      </header>
    </div>
    <hr />
    <h1>Portfolio</h1>
    <hr />
    <div id="portfolio" className="container-fluid">
    <Carouseller />
    </div>
  </>
  );
}

export default App;
