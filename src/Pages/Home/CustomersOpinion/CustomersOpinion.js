
import React from 'react';
import './CustomersOpinion.css';
import arrowRight from '../../../assets/arrow-right.png';
import arrowLeft from '../../../assets/arrow-left.png';
import david from '../../../assets/david.png';
import eliot from '../../../assets/eliot.png';
import rebekah from '../../../assets/rebekah.png';

const CustomersOpinion = () => {
    return (
        <div className='customers-opinion-container'>
            <div className='title-container'>
                <h2 className='opinion-title'>See what our customers
                    say about Yself</h2>
                <div className='flex'>
                    <div className='arrow'>
                        <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrow'>
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
            <div className='customers-container'>
                <div className='customer'>
                    <img src={david} alt="" />
                    <p>David Nganga - Kenya</p>
                </div>
                <div className='customer'>
                    <img src={eliot} alt="" />
                    <p>Eliot Kaggwa - Uganda</p>
                </div>
                <div className='customer'>
                    <img src={rebekah} alt="" />
                    <p>Rebekah Willams - USA</p>
                </div>
            </div>
        </div>
    );
};

export default CustomersOpinion;