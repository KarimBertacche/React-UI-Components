import React from 'react';
import './Footer.css';
import FooterIcons from './FooterContent.jsx';

const Footer = () => {

    const clickEventHandler = event => {
        event.preventDefault();
        console.log('I was clicked');
    };

    return(
        <div className="icon-box"> 
           <FooterIcons clicked={clickEventHandler} class="first-icon" type="mode_comment"/>
           <FooterIcons clicked={clickEventHandler} type="sync" num="4"/>
           <FooterIcons clicked={clickEventHandler} type="favorite_border" num="6"/>    
           <FooterIcons clicked={clickEventHandler} type="mail_outline"/>
        </div>
    );
};

export default Footer;
