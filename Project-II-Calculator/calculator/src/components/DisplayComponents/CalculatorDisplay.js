import React from 'react';
import './Display.css';
import Display from './Display';

const CalculatorDisplay = props => {
    return (
        <div>
            <Display tot={props.tot}/>
        </div>
    );
};

export default CalculatorDisplay;