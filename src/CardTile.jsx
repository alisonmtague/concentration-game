import React, { Component } from 'react';

class CardTile extends Component {
  render() {
    return (
      <span key={this.props.index} className="card-tile" style={{'border': '1px solid red'}}>{this.props.rank} of {this.props.suit}</span>
    );
  }
}

export default CardTile;
