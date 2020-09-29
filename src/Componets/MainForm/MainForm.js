import React from 'react'
import MakeFeature from '../MainForm/MakeFeature';

export default function MainForm(props) {
    return (
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <MakeFeature 
          selected ={props.selected}
          updateFeature ={props.updateFeature}
          USCurrencyFormat ={props.USCurrencyFormat}
          features = {props.features}/>
          </form>
        </main>

    );
}
