import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const date = moment().format("MMM Do YY");

const HeaderTitle = () => {
    return (
        <div className="header-content">
            <h3 className="heading">Lambda School <span className="Lambda">@LambdaSchool</span> <span className="date">{date}</span></h3>
            <HeaderContent text="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
        </div>      
    );
};

export default HeaderTitle;