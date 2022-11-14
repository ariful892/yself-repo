import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../assets/logo.png';
import linkedin from '../../../assets/linkedin.svg';
import fb from '../../../assets/fb-icon.svg';
import twitter from '../../../assets/twitter.svg';
import copyright from '../../../assets/copyright.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='logo-items-container'>
                <div className='logo-container'>
                    <Link to={'/'} className="logo-title "><img className='logo ' src={logo} alt="" /><span>YSELF</span></Link>
                    <p>@ Yself Io</p>
                </div>
                <div className='items-container'>
                    <div className='items'>
                        <span className="items-title">COMPANY</span>
                        <Link to={'/story'} className="item link-hover">Our Story</Link>
                        <Link to={'/security'} className="item link-hover">Security</Link>
                        <Link to={'/careers'} className="item link-hover">Careers</Link>
                        <Link to={'/countries'} className="item link-hover">Countries</Link>
                        <Link to={'/pay'} className="item link-hover">Yself Pay</Link>
                    </div>
                    <div className='items'>
                        <span className="items-title">SUPPORT</span>
                        <Link to={'/faq'} className="item link-hover">FAQ</Link>
                        <Link to={'/contact'} className="item link-hover">Contact Us</Link>
                        <Link to={'/supportprivacy'} className="item link-hover">Privacy Policy</Link>
                        <Link to={'/kenya'} className="item link-hover">Sending to Kenya</Link>
                        <Link to={'/nigeria'} className="item link-hover">Sending to Nigeria</Link>
                    </div>
                    <div className='items'>
                        <span className="items-title">LEGAL</span>
                        <Link to={'/complaints'} className="item link-hover">Customer Complaints</Link>
                        <Link to={'/conditions'} className="item link-hover">Terms & Conditions</Link>
                        <Link to={'/legalprivacy'} className="item link-hover">Privacy Policy</Link>
                    </div>
                    <div className='items social-container'>
                        <span className="items-title">SOCIAL NETWORK</span>
                        <div className="social-network">
                            <Link to={''} className='social-logo' ><img src={fb} alt="" /></Link>
                            <Link to={''} className='social-logo'><img className='' src={linkedin} alt="" /></Link>
                            <Link to={''} className='social-logo' ><img src={twitter} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className='copyright'>Copyright <img className='w-3.5 inline mx-1' src={copyright} alt="" />
                Yself  {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;