import { useState } from 'react';
import './index.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = res.json();
  };

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container"></div>
        <button className="load-more">Load more</button>
      </div>
    </div>
  );
}

export default App;
