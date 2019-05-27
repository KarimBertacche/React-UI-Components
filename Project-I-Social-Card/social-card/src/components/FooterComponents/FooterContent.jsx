import React from 'react';
import './Footer.css';

const FooterIcons = props => {
    return (
        <a href="#">
            <i className={`medium material-icons ${props.class}`}>{props.type} {props.num}</i>
        </a> 
    );  
};

export default FooterIcons;