import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import uniqid from 'uniqid';

import Calculator from './Calculator';

class App extends Component {
  state = {
    incomes_data: [],
    expenditures_data: []

  }


  componentDidMount() {
    axios.get('dummyData.json')
      .then((response) => {
        console.log(response.data);
        this.setState({
          incomes_data: response.data.incomes,
          expenditures_data: response.data.expenditures
        });
        console.log(this.state.incomes);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Calculator
            incomes_data={this.state.incomes_data}
            expenditures_data={this.state.expenditures_data}
          />
        </div>
      </div>
    );
  }
}

export default App;
