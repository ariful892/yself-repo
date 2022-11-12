import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar navbar-container ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:bg-white hover:text-primary '><Link to={''} className='px-3 hover:px-5'>Home</Link></li>
                        <li tabIndex={0} className='hover:bg-white hover:text-primary'>
                            <Link to={''} className=' px-3 '>
                                Who we are
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="w-full p-2 bg-white">
                                <li><Link to={''}>Submenu 1</Link></li>
                                <li><Link to={''}>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li tabIndex={0} className='hover:bg-white hover:text-primary '>
                            <Link to={''} className='px-2 '>
                                How it works
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="w-full p-2  bg-white">
                                <li><Link to={''}>Submenu 1</Link></li>
                                <li><Link to={''}>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link to={''} className='hover:bg-white hover:text-primary px-2.5 hover:px-5'>Countries</Link></li>
                        <li><Link to={''} className='hover:bg-white hover:text-primary px-2.5 hover:px-5'>Contact Us</Link></li>
                        <li><Link to={''} className='hover:bg-white hover:text-primary px-2.5 hover:px-5'>Ratings</Link></li>
                        <li><Link to={''} className='hover:bg-white hover:text-primary px-2.5 hover:px-5 ml-6'>Log In</Link></li>
                        <li><Link to={''} className='hover:bg-white hover:text-primary px-2.5 hover:px-5'>Sign Up</Link></li>
                        <li tabIndex={0} className='hover:bg-white hover:text-primary'>
                            <Link to={''} className='px-2.5 '>
                                Eng
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="w-full p-2 bg-white">
                                <li><Link to={''}>Submenu 1</Link></li>
                                <li><Link to={''}>Submenu 2</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to={''} className=" text-2xl flex items-center"><img className='w-6 h-6 mr-1' src={logo} alt="" /><span>YSELF</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal text-lg ml-24">
                    <li className='hover:bg-white hover:text-primary '><Link to={''} className='px-3 hover:px-6'>Home</Link></li>
                    <li tabIndex={0} className='hover:bg-white hover:text-primary'>
                        <Link to={''} className=' px-3 '>
                            Who we are
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="w-full p-2 bg-white">
                            <li><Link to={''}>Submenu 1</Link></li>
                            <li><Link to={''}>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li tabIndex={0} className='hover:bg-white hover:text-primary '>
                        <Link to={''} className='px-3 '>
                            How it works
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="w-full p-2  bg-white">
                            <li><Link to={''}>Submenu 1</Link></li>
                            <li><Link to={''}>Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to={''} className='hover:bg-white hover:text-primary px-3 hover:px-6'>Countries</Link></li>
                    <li><Link to={''} className='hover:bg-white hover:text-primary px-3 hover:px-6'>Contact Us</Link></li>
                    <li><Link to={''} className='hover:bg-white hover:text-primary px-3 hover:px-6'>Ratings</Link></li>
                    <li><Link to={''} className='hover:bg-white hover:text-primary px-3 hover:px-6 ml-10'>Log In</Link></li>
                    <li><Link to={''} className='hover:bg-white hover:text-primary px-3 hover:px-6'>Sign Up</Link></li>
                    <li tabIndex={0} className='hover:bg-white hover:text-primary'>
                        <Link to={''} className='px-3 '>
                            Eng
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="w-full p-2 bg-white">
                            <li><Link to={''}>Sub 1</Link></li>
                            <li><Link to={''}>Sub 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div >

            </div>
        </div>
    );
};

export default Navbar;