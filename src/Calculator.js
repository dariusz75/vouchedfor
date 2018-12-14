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
            <h5><strong>Monthly spending test</strong></h5>

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
              <label htmlFor="formControlRange">Mortgage</label>
              <span className="float-right">1199</span>
              <input type="range" className="form-control-range" id="formControlRange" />
            </div>
            <div className="form-group">
              <label htmlFor="formControlRange2">Bills</label>
              <span className="float-right">max</span>
              <input type="range" className="form-control-range" id="formControlRange2" />
            </div>
            <div className="form-group">
              <label htmlFor="formControlRange3">General Spending</label>
              <span className="float-right">max</span>
              <input type="range" className="form-control-range" id="formControlRange3" />
            </div>
          </form>
          <h5 className="text-center"><strong>This means you are saving ??? per month</strong></h5>
        </div>
      </div>
    </div>;
  }
}

export default Calculator;

