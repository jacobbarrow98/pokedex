import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
  static defaultProps = {
    pokemon: [
      {
        id: 392,
        name: 'Infernape',
        type: 'Fire/Fighting',
        base_experience: 209,
      },
      { id: 260, name: 'Swampert', type: 'Water/Ground', base_experience: 210 },
      { id: 282, name: 'Gardevoir', type: 'Psychic', base_experience: 208 },
      { id: 350, name: 'Milotic', type: 'Water', base_experience: 213 },
      { id: 491, name: 'Darkrai', type: 'Dark', base_experience: 210 },
      { id: 493, name: 'Arceus', type: 'Normal', base_experience: 255 },
      { id: 386, name: 'Deoxys', type: 'Psychic', base_experience: 215 },
      { id: 477, name: 'Dusknoir', type: 'Ghost', base_experience: 210 },
    ],
  };
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Congratulations! You Win!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Better luck next time, kid.</h1>;
    }
    return (
      <div className="Pokedex">
        <h1>Challenger</h1>
        <h3>Total Experience: {this.props.exp}</h3>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
