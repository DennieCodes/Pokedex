import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

/* Modify your component hierarchy so that App renders a component called Pokegame. 
Pokegame should take your list of 8 pokemon and randomly assign them into two hands of 4 cards each. 
It should then render two Pokedex components, one for each hand. */

class Pokegame extends Component {
  static defaultProps = {
    Pokemon: 
    [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  };

  render() {
    // Each Pokedex should be passed an array of 4 Pokemon objects
    // Create 2 arrays of 4 sets of Pokemon characters
    let firstDeck = []; 
    let secondDeck = [];
    let firstTotal = 0;
    let secondTotal = 0;
    
    this.props.Pokemon.forEach(value => {
      // Set 50% random chance to assign the value of Pokemon to either the first or second deck.  Use && condition and
      // also ternary comparison to ensure that each deck only receives 4 cards.

      Math.random() > 0.5 && firstDeck.length <4 ? 
        firstDeck.push(value) : secondDeck.length < 4 ? 
          secondDeck.push(value) : firstDeck.push(value);
    });

    // Iterate through each new deck and tally the experience
    for(let items of firstDeck) {
      firstTotal += items.base_experience;
    }

    for(let items of secondDeck) {
      secondTotal += items.base_experience;
    }

    return (
      <div className="Pokegame-container">
        <h1 className="Pokegame-title">Pokegame</h1>
          <Pokedex 
            Pokemon={firstDeck} 
            total={firstTotal}
            isWinner={firstTotal > secondTotal ? true : false}
          />
          <Pokedex 
            Pokemon={secondDeck} 
            total={secondTotal}
            isWinner={secondTotal > firstTotal ? true : false}
          />
      </div>
    )
  }
}

export default Pokegame;