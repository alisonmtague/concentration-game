import React, { Component } from 'react';
import CardTile from './CardTile';

class CardTable extends Component {
  constructor(props) {
    super(props);

    this.createDeck = this.createDeck.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.renderCardTile = this.renderCardTile.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.compareCards = this.compareCards.bind(this);

    this.state = { deck: [],
                   cardsInPlay: [],
                   matchedCards: []
                 };
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
    const matched = this.state.matchedCards.includes(index);
    // debugger;
    return <CardTile index={index} rank={card.rank} suit={card.suit} clickHandler={() => this.flipCard(index)} cardsInPlay={this.state.cardsInPlay} matched={matched} />
  }

  flipCard(index) {
    this.setState({cardsInPlay: [...this.state.cardsInPlay, index]}, () => this.compareCards())
  }

  compareCards() {
    const { cardsInPlay, deck } = this.state;

    if (cardsInPlay.length === 2) {
      const firstFlippedCard = deck[cardsInPlay[0]];
      const secondFlippedCard = deck[cardsInPlay[1]];
      const red = ['hearts', 'diamonds'];
      const black = ['spades', 'clubs']

      const sameColor = (red.includes(firstFlippedCard.suit) && red.includes(secondFlippedCard.suit)) || (black.includes(firstFlippedCard.suit) && black.includes(secondFlippedCard.suit));

      if ((firstFlippedCard.rank === secondFlippedCard.rank) && sameColor) {
        // its a match!
        this.setState({ matchedCards: [...this.state.matchedCards, cardsInPlay[0]] }, () => this.setState({ matchedCards: [...this.state.matchedCards, cardsInPlay[1]] }) );
        this.setState({ cardsInPlay: [] });
      } else {
        // its not a match
        setTimeout(() => {
          this.setState({ cardsInPlay: [] });
        }, 2000)
      }
    }
  }

  render() {
    const { matchedCards, deck} = this.state;

    if (matchedCards.length !== 0 && (matchedCards.length === deck.length)) {
      return <div>FINISHED</div>
    } else {
      return (
        <div className="card-table" style={{width: '80%', position: 'fixed'}}>
          <header>Card Table</header>
          <p>this is the table</p>
          <ul style={{listStyleType: 'none', paddingLeft: 0}}>
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
