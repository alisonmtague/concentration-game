import React, { Component } from 'react';
import CardTile from './CardTile';

class CardTable extends Component {
  constructor(props) {
    super(props);

    this.createDeck = this.createDeck.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.renderCardTile = this.renderCardTile.bind(this);

    this.state = { deck: [] };
  }

  componentDidMount() {
    const shuffledDeck = this.shuffleDeck(this.createDeck());

    this.setState({ deck: shuffledDeck });
  }

  createDeck() {
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const deck = [];

    for( var s = 0; s < suits.length; s++ ) {
      for( var r = 0; r < ranks.length; r++ ) {
        const card = { rank: ranks[r], suit: suits[s] };
        deck.push(card);
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

  renderCardTile(index, card) {
    return <CardTile index={index} rank={card.rank} suit={card.suit} />
  }

  render() {
    if(this.state.deck.length === 0){
     return null;
    } else {
      return (
        <div className="card-table">
          <header>Card Table</header>
          <p>this is the table</p>
          <ul>
            {
              this.state.deck.map((card, index) => (
                <li key={index}>{this.renderCardTile(index, card)}</li>
              ))
            }
          </ul>
        </div>
      );
   }
  }

}

export default CardTable;
