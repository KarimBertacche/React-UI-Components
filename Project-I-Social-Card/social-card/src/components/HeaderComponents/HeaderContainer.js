import React from 'react';
import './Header.css';
// import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <header>
            <ImageThumbnail image="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
            <HeaderTitle text="is working!!"/>
            {/* <HeaderContent text="His working!!"/> */}
        </header>
    );
};

export default HeaderContainer; 
