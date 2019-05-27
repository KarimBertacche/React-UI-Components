import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {

    const linkEventListener = () => {
        window.open('https://reactjs.org/');
    }


    return (
        <div className="card-box" onClick={linkEventListener}>
            <CardBanner 
            bgImg="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="Banner Image"
            />
            <CardContent 
            title="Get started with React" 
            text="React makes it painless to create interactive UIs. Design simple views for each state in your application" 
            source="reactjs.org"
            />
        </div>
    );
}

export default CardContainer;