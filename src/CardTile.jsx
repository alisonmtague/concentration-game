import React, { Component } from 'react';

class CardTile extends Component {
  constructor(props) {
    super(props);

    this.flipCard = this.flipCard.bind(this);

    this.state = { cardsInPlay: [] };
  }

  flipCard() {
    this.setState({
      cardsInPlay: [...this.state.cardsInPlay, this.props.index]
    })
  }

  render() {
    const { cardsInPlay } = this.state;
    const { index } = this.props;
    const inPlay = cardsInPlay.includes(index);

    if (inPlay) {
      return (
        <span key={this.props.index} className="card-tile" style={{'border': '1px solid red', width: '145px', height: '203px', display: 'inline-block', float: 'left', margin: '3px'}} onClick={this.flipCard}>{this.props.rank} of {this.props.suit}</span>
      );
    } else {
      return (
        <span key={this.props.index} className="card-tile" style={{'border': '1px solid red', width: '145px', height: '203px', display: 'inline-block', float: 'left', margin: '3px'}} onClick={this.flipCard}></span>
      );
    }
  }

}

export default CardTile;
