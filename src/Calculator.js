import React, { Component } from 'react';
import uniqid from 'uniqid';

class Calculator extends Component {

  state = {
    mortgageSliderValue: 0,
    billsSliderValue: 0,
    generalSpendingSliderValue: 0,
    savings: 2800,
  }

  mortgageSliderHandleChange = (event) => {
    event.preventDefault();
    this.setState({
      mortgageSliderValue: event.target.value,
      savings: this.state.savings - event.target.value
    });
  }

  billsSliderHandleChange = (event) => {
    event.preventDefault();
    this.setState({ billsSliderValue: event.target.value });
  }

  generalSpendingSliderHandleChange = (event) => {
    event.preventDefault();
    this.setState({ generalSpendingSliderValue: event.target.value });
  }

  render() {

    const { incomes_data, expenditures_data, mortgageSliderValue, billsSliderValue, generalSpendingSliderValue, savings } = this.props;

    return <div className="row">
      <div className="col-lg-6">
        <div className="section">
          <h2>Your income and spend</h2>
          <h5><strong>Annual income</strong></h5>
          {incomes_data.map((item) =>
            <form key={uniqid()}>
              <div className="row">
                <div className="form-group col-4">
                  <label htmlFor="formGroupExampleInput1">{item.name}:</label>
                  <input type="text" id="formGroupExampleInput1" className="form-control" value={item.amount} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput2">From age:</label>
                  <input type="text" id="formGroupExampleInput2" className="form-control" value={item.from_age} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput3">To age:</label>
                  <input type="text" id="formGroupExampleInput3" className="form-control" value={item.to_age} readOnly />
                </div>
              </div>
            </form>
          )}

          <form>
            <h5><strong>Monthly spending</strong></h5>

            {expenditures_data.map((item) =>
              <div className="row" key={uniqid()}>
                <div className="form-group col-4">
                  <label htmlFor="formGroupExampleInput4">{item.name}:</label>
                  <input type="text" id="formGroupExampleInput4" className="form-control" value={item.amount} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput5">From age:</label>
                  <input type="text" id="formGroupExampleInput5" className="form-control" value={item.from_age} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput6">To age:</label>
                  <input type="text" id="formGroupExampleInput6" className="form-control" value={item.to_age} readOnly />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="section">
          <h2>Spend less</h2>
          <h5 className="text-center">Try reducing your monthly spending to see how your forecast could improve!</h5>
          <form>
            <div className="form-group">
              <label htmlFor="mortgage-slider">Mortgage</label>
              <span className="float-right">{this.state.mortgageSliderValue}</span>
              <input id="mortgage-slider" className="form-control-range" type="range" min="1" max="1199" step="1"
                defaultValue={mortgageSliderValue}
                onChange={this.mortgageSliderHandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bills-slider">Bills</label>
              <span className="float-right">{this.state.billsSliderValue}</span>
              <input id="bills-slider" className="form-control-range" type="range" min="1" max="700" step="1"
                defaultValue={billsSliderValue}
                onChange={this.billsSliderHandleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="general-spending">General Spending</label>
              <span className="float-right">{this.state.generalSpendingSliderValue}</span>
              <input id="general-spending" className="form-control-range" type="range" min="1" max="700" step="1"
                defaultValue={generalSpendingSliderValue}
                onChange={this.generalSpendingSliderHandleChange}
              />
            </div>
          </form>
          <h5 className="text-center"><strong>This means you are saving {this.state.savings} per month</strong></h5>
        </div>
      </div>
    </div>;
  }
}

export default Calculator;

