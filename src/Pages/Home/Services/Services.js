import React from 'react';
import services from '../../../assets/services.png';
import edit from '../../../assets/edit.png';
import transfer from '../../../assets/transfer.png';
import trusted from '../../../assets/trusted.png';
import call from '../../../assets/call.png';
import './Services.css';

const Services = () => {
    return (
        <div className='services-container'>
            <div className='image-container'>
                <img className='services-img' src={services} alt="" />
            </div>
            <div className='services'>

                <div className='service'>
                    <img className='w-7 h-7 mr-5 mt-2' src={edit} alt="" />

                    <div>
                        <h2>Easy to sign up</h2>
                        <p>Link your debit card, verify your identity and be sending in minutes.</p>

                    </div>
                </div>
                <div className='service'>
                    <img className='w-7 h-7 mr-5 mt-2' src={transfer} alt="" />

                    <div>
                        <h2>Fast & convenient money transfer</h2>
                        <p>Skip the line and send money from your phone to your loved ones in seconds.</p>

                    </div>
                </div>
                <div className='service'>
                    <img className='w-7 h-7 mr-5 mt-2' src={trusted} alt="" />

                    <div>
                        <h2>Trusted & legitimate</h2>
                        <p>Trusted by over 800k users, Yself is operated by Yself Inc. and is authorized to transmit money in the US, Canada, the UK and the EU.</p>

                    </div>
                </div>
                <div className='service'>
                    <img className='w-7 h-7 mr-5 mt-2' src={call} alt="" />

                    <div>
                        <h2>24/7 support</h2>
                        <p>Our phone lines are open 24/7 in multiple languages should you need it.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;