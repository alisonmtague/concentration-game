import React, { Component } from 'react';

class CardTile extends Component {
  render() {
    return (
      <div className='card-tile' style={{'border': '1px solid red'}}>
        <p>{this.props.test}</p>
      </div>
    );
  }
}

export default CardTile;
