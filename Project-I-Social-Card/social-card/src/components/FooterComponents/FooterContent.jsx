import React from 'react';
import './Footer.css';

const FooterIcons = props => {
    return (
        <div>
            <span className="num">{props.num}</span>     
            <a href="#">
                <i onClick={props.clicked} className={`medium material-icons ${props.class}`}>{props.type}</i>
            </a> 
        </div>
    );  
};

export default FooterIcons;