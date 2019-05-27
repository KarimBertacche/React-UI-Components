import React from 'react';
import './Footer.css';
import FooterIcons from './FooterContent.jsx';

const Footer = () => {
    return(
        <div> 
           <FooterIcons class="first-icon" type="mode_comment"/>
           <FooterIcons type="sync" num="4"/>
           <FooterIcons type="favorite_border" num="6"/>    
           <FooterIcons type="mail_outline"/>
        </div>
    );
};

export default Footer;
