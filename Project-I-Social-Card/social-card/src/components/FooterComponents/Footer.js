import React from 'react';
import './Footer.css';
import FooterIcons from './FooterContent.jsx';
import { isContext } from 'vm';

const Footer = () => {

    const clickEventHandler = event => {
        event.preventDefault();
        const icons = document.querySelectorAll('.material-icons');
        icons.forEach((icon) => {
            if(event.target.textContent === 'favorite_border'){
                icon.classList.toggle('red');
            } else if(event.target.textContent === 'mode_comment'){
                icon.classList.toggle('white');
            } else if(event.target.textContent === 'sync'){
                icon.classList.toggle('rotate');
            } else if(event.target.textContent === 'mail_outline'){
                icon.classList.toggle('move');
            }
        });     
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
