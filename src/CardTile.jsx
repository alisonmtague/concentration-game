import React, { Component } from 'react';

class CardTile extends Component {
  render() {
    const { index, cardsInPlay, matched } = this.props;
    const inPlay = cardsInPlay.includes(index);

    if (inPlay || matched) {
      return (
        <span key={this.props.index} className="card-tile">{this.props.rank} of {this.props.suit}</span>
      );
    } else {
      return (
        <span key={this.props.index} className="card-tile" onClick={this.props.clickHandler}></span>
      );
    }
  }

}

export default CardTile;
