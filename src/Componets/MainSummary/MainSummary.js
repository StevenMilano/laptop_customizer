import React from 'react';
import Summary from './Summary';

export default function MainSummary(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
    return (
      <section className="main__summary">
          <h2>Your cart</h2>
          {<Summary 
          selected ={props.selected}
          USCurrencyFormat ={props.USCurrencyFormat}
          />}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {props.USCurrencyFormat.format(total)}
            </div>
          </div>
        </section>
    );
}