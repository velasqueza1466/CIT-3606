import logo from './logo.svg';
import './App.css';

function MyButton(props) {
  return <button onClick={handler}>{props.text}</button>;}

function handler() {
  alert("You clicked me!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Andrew  <code>
            <MyButton text="Andrew's Button"/>
            <MyButton text="Another Button"/>
      
            src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
