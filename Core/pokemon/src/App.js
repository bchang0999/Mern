import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [pokedex, setPokedex] = useState([]);

  const onClick = (e) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => setPokedex(response.data.results))
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <button onClick={onClick}>Complete the pokedex</button>

      <div>
        {
          pokedex.map((pokemon, i) =>

            <div key={i}> {pokemon.name} </div>
          )
        }
      </div>
    </div>
  );
}

export default App;