import React from 'react';

import './styles.css';

const Feature = (props) => {
  return (
    <>
      <div className="feature">
        <div className="feature_card">
          <p style={{color: props.color}}>TIPO DE CARACTERÍSTICA</p>
          <h2 style={{color: props.color}}>{props.title}</h2>
          <p>{props.info}</p>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Feature;
