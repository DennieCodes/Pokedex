import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {

  render() {
    // {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    const stats = this.props;
    const parsed_id = stats.id.toString().padStart(3, '0');
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{stats.name}</h2>
        <img className="Pokecard-img"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${parsed_id}.png`}
          alt={stats.name}
        />
        <p className="Pokecard-text">type: {stats.type}</p>
        <p className="Pokecard-text">EXP: {stats.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;