import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import OperatorButton from './OperatorButton';
import NumberButton from './NumberButton';

const ButtonsContainer = props => {
    return (
        <div className="btn-wrapper">
            <ActionButton content="clear"/>
            <OperatorButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <OperatorButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <OperatorButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <OperatorButton />
            <ActionButton content="0"/>
            <OperatorButton/>
        </div>
    );
};

export default ButtonsContainer;