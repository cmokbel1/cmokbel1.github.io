import logo from './round-clm.png';
import './App.css';
import { Navigation } from './components'


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
  </>
  );
}

export default App;
