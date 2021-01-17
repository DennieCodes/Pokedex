import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
  const stats = props;
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

export default Pokecard;