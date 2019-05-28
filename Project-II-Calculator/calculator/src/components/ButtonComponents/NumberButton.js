import React from 'react';
import './Button.css';


const NumberButton = props => {
    const bgColor = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
    return <button onClick={props.clicked} className={props.btnStyle} style={bgColor}>{props.content}</button>
};

export default NumberButton;