import React from 'react';
import './Footer.css';

const FooterIcons = props => {
    return <a className="footer-icons" href={props.icon}>{props.num}</a>
};

export default FooterIcons;