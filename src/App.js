import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Calculator from './Calculator';

class App extends Component {

  componentDidMount() {
    axios.get('dummyData.json').then((response) => {
      console.log(response);
    })
  }

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
