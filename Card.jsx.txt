import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p>Dato 1: {data.input1}</p>
      <p>Dato 2: {data.input2}</p>
    </div>
  );
};

export default Card;
