import logo from './round-clm.png';
import './App.css';
import { Navigation, Carouseller } from './components'


function App() {
  return (
    <>
    <Navigation />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Claude Mokbel
        </p>
      </header>
    </div>
    <Carouseller />
  </>
  );
}

export default App;
