import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 392,
        name: 'Infernape',
        type: 'fire/fighting',
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
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPoke = hand2.splice(randIdx, 1)[0];
      hand1.push(randPoke);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex
          pokemon={hand1}
          exp={exp1}
          isWinner={exp1 > exp2}
        />
        <Pokedex
          pokemon={hand2}
          exp={exp2}
          isWinner={exp2 > exp1}
        />
      </div>
    );
  }
}

export default Pokegame;
