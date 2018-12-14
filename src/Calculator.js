import React, { Component } from 'react';
import uniqid from 'uniqid';

class Calculator extends Component {

  render() {

    const { incomes_data, expenditures_data } = this.props;

    return <div className="row">
      <div className="col-lg-6">
        <div className="section">
          <h2>Your income and spend</h2>
          <h5><strong>Annual income</strong></h5>
          {incomes_data.map((item) =>
            <form key={uniqid()}>
              <div className="row">
                <div className="form-group col-4">
                  <label htmlFor="formGroupExampleInput">{item.name}:</label>
                  <input type="text" className="form-control" value={item.amount} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput2">From age:</label>
                  <input type="text" className="form-control" value={item.from_age} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput2">To age:</label>
                  <input type="text" className="form-control" value={item.to_age} readOnly />
                </div>
              </div>
            </form>
          )}

          <form>
            <h5><strong>Monthly spending test</strong></h5>

            {expenditures_data.map((item) =>
              <div className="row" key={uniqid()}>
                <div className="form-group col-4">
                  <label htmlFor="formGroupExampleInput">{item.name}:</label>
                  <input type="text" className="form-control" value={item.amount} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput2">From age:</label>
                  <input type="text" className="form-control" value={item.from_age} readOnly />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="formGroupExampleInput2">To age:</label>
                  <input type="text" className="form-control" value={item.to_age} readOnly />
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
              <label htmlFor="formControlRange">Mortgage</label>
              <span className="float-right">1</span>
              <input type="range" className="form-control-range" id="formControlRange" />
            </div>
            <div className="form-group">
              <label htmlFor="formControlRange">Bills</label>
              <span className="float-right">1</span>
              <input type="range" className="form-control-range" id="formControlRange" />
            </div>
            <div className="form-group">
              <label htmlFor="formControlRange">General Spending</label>
              <span className="float-right">1</span>
              <input type="range" className="form-control-range" id="formControlRange" />
            </div>
          </form>
          <h5 className="text-center"><strong>This means you are saving 111 per month</strong></h5>
        </div>
      </div>
    </div>;
  }
}

export default Calculator;

