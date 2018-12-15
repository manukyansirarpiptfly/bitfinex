import React, { Component } from 'react';

import {BooksContainer} from './books';
import {TradesContainer} from './trades'
import {TickerContainer} from './ticker'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="App">
          <BooksContainer />
          <TradesContainer />
        </div>
  
        <TickerContainer />
      </div>
  
    );
  }
}

export default App;
