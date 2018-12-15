import React, { Component } from 'react';

import {BooksContainer} from './books';
import {TradesContainer} from './trades'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BooksContainer />
          <TradesContainer />
      </div>
    );
  }
}

export default App;
