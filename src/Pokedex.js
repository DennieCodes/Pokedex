import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    // Instead of an array, create a JSX Pokecard object
    // const Pokemon = this.props.Pokemon.map(item => item);
    const PokeTally = this.props.total;
    const Pokedeck = this.props.Pokemon.map(values => {
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
        <h2 className="Pokedex-total">Total: {PokeTally}</h2>
        {this.props.isWinner ? <h3 className="Pokedex-winner">This Hand Wins!</h3> : ''}
      </div>
    );
  }
}

export default Pokedex;