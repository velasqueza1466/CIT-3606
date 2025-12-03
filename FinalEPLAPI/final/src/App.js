import logo from './logo.svg';
import './App.css';

function Player(props) {
  return (
    <div className= "player-card">
      <h2>{props.name}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
    </div>
  )
}

async function handler(
  https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p
) {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <Pokemon name="Messi" image="MESSI.jpeg"/>
        <Pokemon name="Snorlax" image="snorlax.jpg"/>
        <Pokemon name="Charmander" image="charmander.webp"/>
        <Pokemon name="Dittobase" image="dittobase.png"/>
        </h1>
        <h1>
          <pokemon name="Messi" image="MESSI.jpeg"></player-card>
          <pokemon name="Snorlax" image="snorlax.jpg"></pokemon>
          <pokemon name="Charmander" image="charmander.webp"></pokemon>
          <pokemon name="Dittobase" image="dittobase.png"></pokemon>
        </h1>
      </header>
    </div>
  );
}



function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} width="500" height="500"/>
    </div>
  ); 
  
}





export default App;
