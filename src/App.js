import React, { Component } from 'react';
import CardGameDetails from './CardGameDetails';
import CardTable from './CardTable';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <CardGameDetails />
        <CardTable />
      </div>
    );
  }
}

export default App;
