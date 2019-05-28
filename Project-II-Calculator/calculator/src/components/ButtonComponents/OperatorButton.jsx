import React from 'react';
import './Button.css';


const OperatorButton = props => {
    
    const bgColor = {
        color: `${props.color}`
    }
    return <button className="calc-btn" style={bgColor}>{props.content}</button>
};

export default OperatorButton;

