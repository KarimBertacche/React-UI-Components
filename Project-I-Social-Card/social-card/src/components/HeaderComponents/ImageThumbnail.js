import React from 'react';
import './Header.css';

const ImageThumbnail = props => {
    return <img className="logo" src={props.image}/>
};

export default ImageThumbnail;