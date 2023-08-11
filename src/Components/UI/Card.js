import React from 'react';
import './Card.css';

const Card = ({childern, className}) => {
    const madeCalss='card'+className;
  return (
  <div className={madeCalss}>
    {childern}
  </div>);
};

export default Card;
