import React from 'react';
import './GetStarted.css';
import person1 from '../../../assets/started-person1.png';
import person2 from '../../../assets/started-person2.png';
import bg from '../../../assets/started-bg.png';

const GetStarted = () => {
    return (
        <div className='get-started-container'>
            <div>
                <img className='person1-img' src={person1} alt="" />
                <img className='bg-img' src={bg} alt="" />
            </div>
            <div className='title-text-container'>
                <h2 className='start-title'>
                    Get started
                    sending money to
                    your loved ones
                </h2>
                <p className='start-text'>
                    Simply download the app, link your debit card, verify your identity and quickly transfer money to your friends and loved ones. Seriously, it’s that simple.
                </p>
                <img className='person2-img' src={person2} alt="" />
            </div>
        </div>
    );
};

export default GetStarted;