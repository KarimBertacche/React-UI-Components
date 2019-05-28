import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import OperatorButton from './OperatorButton';
import NumberButton from './NumberButton';

const ButtonsContainer = props => {
    return (
        <div className="btn-wrapper">
            <ActionButton content="clear"/>
            <OperatorButton bgColor="#A0001E" color="#fff" content="&divide;"/>
            <NumberButton content="9"/>
            <NumberButton content="8"/>
            <NumberButton content="7"/>
            <OperatorButton bgColor="#A0001E" color="#fff" content="&times;"/>
            <NumberButton content="6"/>
            <NumberButton content="5"/>
            <NumberButton content="4"/>
            <OperatorButton bgColor="#A0001E" color="#fff" content="&minus;"/>
            <NumberButton content="3"/>
            <NumberButton content="2"/>
            <NumberButton content="1"/>
            <OperatorButton bgColor="#A0001E" color="#fff" content="+"/>
            <ActionButton content="0" bold="bold"/>
            <OperatorButton bgColor="#A0001E" color="#fff" content="="/>
        </div>
    );
};

export default ButtonsContainer;