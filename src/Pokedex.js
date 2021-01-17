import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {
  const { total, isWinner, Pokemon } = props;
  const Pokedeck = Pokemon.map(values => {
    return <Pokecard
      key={values.id}
      id={values.id}
      name={values.name}
      type={values.type}
      base_experience={values.base_experience}      
    />
  });

  return (
    <div className="Pokedex-container">
      <div className="Pokedex-row">
        {Pokedeck}
      </div>
      <h2 className="Pokedex-total">Total: {total}</h2>
      {isWinner ? <h3 className="Pokedex-winner">This Hand Wins!</h3> : ''}
    </div>
  );
}

export default Pokedex;