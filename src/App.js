import React, { Component } from 'react';
import './App.css';

import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
