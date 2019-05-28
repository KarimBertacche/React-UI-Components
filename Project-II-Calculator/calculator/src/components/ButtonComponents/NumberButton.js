import React from 'react';
import './Button.css';


const NumberButton = props => {
    
    const bgColor = {
        color: `${props.color}`
    }
    return <button className="num-btn" style={bgColor}>{props.content}</button>
};

export default NumberButton;