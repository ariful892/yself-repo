import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight, faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './SendMoney.css'
import arrow from '../../../assets/arrow.png';
import kenya from '../../../assets/kenya.png';
import usa from '../../../assets/usa.png';
import arrowLeft from '../../../assets/arrow-left.png';
import arrowRight from '../../../assets/arrow-right.png';

const SendMoney = () => {
    return (
        <div className='send-money-container'>
            <div className='send-money'>
                <h2 className='send-money-title'>Sends money to your loved ones and to yourself</h2>
                <p className='send-money-text'>Our translations are bidirectional more of your money goes to those you love, not to high service fees.</p>
            </div>
            <div className="button-container">
                <div className='send-btn'>
                    <div className='btn-text'>
                        <p>You send: <span>/=0.00</span></p>
                    </div>
                    <div className='flex items-center'>
                        <img className='country-img' src={kenya} alt="" />
                        <FontAwesomeIcon className='text-lg' icon={faChevronDown}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="transactions">
                    <div>
                        <img className='transaction-icon' src={arrowLeft} alt="" />
                    </div>
                    <div >
                        <img className='transaction-icon' src={arrowRight} alt="" />
                    </div>
                </div>
                <div className='receive-btn'>
                    <div className='btn-text'>
                        <p>They get: <span>$0.00</span></p>
                    </div>
                    <div className='flex items-center'>
                        <img className='country-img' src={usa} alt="" />
                        <FontAwesomeIcon className='text-lg' icon={faChevronDown}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SendMoney;