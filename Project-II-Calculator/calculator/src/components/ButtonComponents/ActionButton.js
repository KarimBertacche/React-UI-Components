import React from 'react';
import './Button.css';

const ActionButton = props => {
    const bold = {
        fontWeight: `${props.bold}`,
    }

    return (
        <button className="action-btn" style={bold}>{props.content}</button>
    );
};

export default ActionButton;