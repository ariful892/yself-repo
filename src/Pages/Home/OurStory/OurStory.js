import React from 'react';
import './OurStory.css';
import storyImg from '../../../assets/story-img.png';
import storyBg from '../../../assets/story-bg.png';

const OurStory = () => {
    return (
        <div className='story-container'>
            <div className='img-bg'>
                <div className='img-container'>
                    {/* <img src={storyBg} alt="" /> */}
                    <img className='story-img' src={storyImg} alt="" />
                </div>
            </div>
            <div className='title-btn-container'>
                <h2 className='story-title'>OUR STORY</h2>
                <p className='story-text'>At Yself we're on a mission: to make sure your money gets to your friends and family, as safely and effortlessly as possible.</p>
                <button className='story-btn'>OUR STORY</button>
            </div>
        </div>
    );
};

export default OurStory;