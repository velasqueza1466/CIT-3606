import logo from './logo.svg';
import './App.css';

function MyButton(props) {
  return <button class= "button" onClick = {handler}>{props.text}</button>;
}
function handler() {
  alert("Button clicked!");
}

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} width="500" height="500"/>
    </div>
  ); 
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <Pokemon name="Pikachu" image="pikachu.jpg"/>
        <Pokemon name="Snorlax" image="snorlax.jpg"/>
        <Pokemon name="Charmander" image="charmander.webp"/>
        <Pokemon name="Dittobase" image="dittobase.png"/>
        </h1>
        <h1>
          <pokemon name="Pikachu" image="pikachu.jpg"></pokemon>
          <pokemon name="Snorlax" image="snorlax.jpg"></pokemon>
          <pokemon name="Charmander" image="charmander.webp"></pokemon>
          <pokemon name="Dittobase" image="dittobase.png"></pokemon>
        </h1>
      </header>
    </div>
  );
}

export default App;
