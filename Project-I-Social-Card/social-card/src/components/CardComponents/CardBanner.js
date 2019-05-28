import React from 'react';
import './Card.css';

const CardBanner = props => {
    return <img className="banner-img" src={props.bgImg} alt={props.alt}/>;
};

export default CardBanner;