import React, { useState } from 'react'

import { Link } from 'react-scroll'

const Header = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick



    return (
<<<<<<< HEAD
        <div className="fixed w-full top-0 left-0 bg-white flex justify-between p-4 px-8 md:px-16 items-center shadow">
=======
        <div className="fixed w-full top-0 left-0 bg-white flex justify-between p-4 px-8 md:px-16 items-center shadow z-49" data-aos="bg">
>>>>>>> origin
            <div className="cursor-pointer pl-0 md:pl-20">
                <div className="flex font-bold text-3xl">THIS<div className="text-sky-600">Logo</div></div>
            </div>
            <div className="pr-0 md:pr-20">
                <ul className="hidden md:flex gap-12 cursor-pointer">
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md ease-in duration-300">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md ease-in duration-300">
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md ease-in duration-300">
                        <Link to="services" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md ease-in duration-300">
                        <Link to="contact" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                    {/* <li className="text-lg p-2 pl-4 pr-4 font-medium bg-sky-500 text-white rounded-md ease-in duration-300">Sign In</li> */}
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="" width={24}></img> : <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" className="" width={24}></img>}
                </div>
                <div className={!nav ? 'hidden' : 'fixed transition-transform ease-in-out duration-300 md:hidden'}>
                    <ul className="flex flex-col gap-4 fixed left-0 top-16 uppercase p-6 text-center bg-white w-full shadow-2xl">
                        <li className="text-md font-medium p-2 rounded-md">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="text-md font-medium p-2 rounded-md">
                            <Link to="about" spy={true} smooth={true} offset={20} duration={500} onClick={closeMenu}>About</Link>
                        </li>
                        <li className="text-md font-medium p-2 rounded-md">
                            <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Services</Link>
                        </li>
                        <li className="text-md font-medium p-2 rounded-md">
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;