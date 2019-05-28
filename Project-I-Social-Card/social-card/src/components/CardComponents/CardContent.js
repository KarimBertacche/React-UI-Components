import React from 'react';
import './Card.css';

const CardContent = props => {
    return(
        <div className="card-content">
            <h3 className="heading-tertiary">{props.title}</h3>
            <p className="card-text">{props.text}</p>
            <a className="card-link" href={props.source}>reactjs.org</a>
        </div>
    );
};

export default CardContent;