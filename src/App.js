import logo from './selfie.png';
import './App.css';
import { Header } from './components/Header'



function App() {
  return (
    <>
    <Header />
    <br />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Claude Mokbel
        </h1>
      </header>
    </div>
  </>
  );
}

export default App;
