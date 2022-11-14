import React from 'react';
import './TopBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../../../assets/banner-img.png';
import conversation1 from '../../../assets/conversation1.png';
import conversation2 from '../../../assets/conversation2.png';
import person3 from '../../../assets/person3.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <div
            className='top-banner-container z-0'>

            <Navbar></Navbar>
            <div className='top-banner '>
                <h2 className='banner-title'>Sends money
                    with love</h2>
                <p className='banner-text  mt-4'>
                    Transfer money safely, affordably, and quickly to friends and family in Africa, Asia and The Americas. Trusted by over 800k users.
                </p>
                <div className='mt-8 grid grid-cols-2 mr-8'>
                    <button className='py-4  mr-4 bg-white text-primary  hover:bg-sky-600 hover:text-white'><Link to={'/learn'}>LEARN MORE</Link></button>
                    <button className='py-4 bg-secondary hover:bg-white hover:text-secondary'><Link to={'/countries'}>AVAILABLE COUNTRIES <FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></Link></button>
                </div>
            </div>
            <div className='banner-img-container'>
                <img className='banner-img' src={bannerImage} alt="" />
            </div>
            <div className='conversation1 '>
                <div className=' flex'>
                    <img className='w-14 py-3 mr-3' src={conversation1} alt="" />
                    <div className='text-primary mt-4'>
                        <h2 className='conversation-name'>Chris Send Kimani</h2>
                        <p className='conversation-text'>$70 for books</p>
                    </div>
                </div>
            </div>
            <div className='conversation2 '>
                <div className=' flex items-center '>

                    <div className='text-primary mr-2'>
                        <h2 > <span className='conversation-name mr-2'>Kimani</span> <span className='conversation-text'>thank you so much!</span> </h2>
                    </div>
                    <img className='w-14 py-3' src={conversation2} alt="" />


                </div>
            </div>

        </div>
    );
};

export default TopBanner;