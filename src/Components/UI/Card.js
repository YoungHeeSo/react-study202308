import React from 'react';
import styls from './Card.module.css';

const Card = ({children, className}) => {
    // const madeClass='card '+className;
    return <div className={`${styls.card} ${className}`}> {children}</div>;
};

export default Card;
