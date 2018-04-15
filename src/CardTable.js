import React, { Component } from 'react';
import CardTile from './CardTile';

class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: [] } ;
    this.createDeck = this.createDeck.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
  }

  componentWillMount() {
    const shuffledDeck = this.shuffleDeck(this.createDeck());
    this.setState({ deck: shuffledDeck });
  }

  createDeck() {
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const deck = [];

    for( var s = 0; s < suits.length; s++ ) {
      for( var r = 0; r < ranks.length; r++ ) {
        deck.push(ranks[r] + ' of ' + suits[s]);
      }
    }
    return deck;
  }

  shuffleDeck(deck) {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }

  render() {
    return (
      <div className='card-table'>
        <header>Card Table</header>
        <p>this is the table</p>
        <CardTile test={this.state.deck}/>
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
      </div>
    );
  }
}

export default CardTable;
