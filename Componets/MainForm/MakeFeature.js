import React from 'react'
import slugify from 'slugify';
import Feature from './Feature';


export default function MakeFeature(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.selected[feature].name}
                onChange={e => props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({props.USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
        return <Feature
        key = {featureHash}
        options = {options}
        feature = {feature}/>;
      });
    return features;          
}
    