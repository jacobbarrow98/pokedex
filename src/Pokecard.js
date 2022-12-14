import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends React.Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <a
          href={`https://bulbapedia.bulbagarden.net/wiki/${this.props.name}_(Pok%C3%A9mon)`}
        >
          <h3 className="Pokecard-title">{this.props.name}</h3>
          <img
            className="Pokecard-img"
            src={imgSrc}
            alt={this.props.name}
          />
        </a>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
