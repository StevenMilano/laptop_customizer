import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal'

export default function MainSummary(props) {
    return (
      <section className="main__summary">
          <h2>Your cart</h2>
          {<SummaryOption 
          selected ={props.selected}
          USCurrencyFormat ={props.USCurrencyFormat}
          />}
          {<SummaryTotal 
          selected = {props.selected} 
          USCurrencyFormat = {props.USCurrencyFormat}/>}
        </section>
    );
}