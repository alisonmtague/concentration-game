import React, { Component } from 'react';

class CardGameDetails extends Component {
  render() {
    return (
      <div className='game-details'>
        <header>
          <h1>Game of Concentration</h1>
        </header>
        <p className="card-details-subheader">Match a card with its same rank and color!</p>
      </div>
    );
  }
}

export default CardGameDetails;
