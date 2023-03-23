import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Linked from 'next/link'
import useScrollPosition from './hooks/scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsSun, BsMoon, BsTelephone } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdLogout, MdOutlineInfo } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri'

import Darkmode from './darkmode'

const Header = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick

    // Function for scrolling effect Navbar
    const classNames = (...classes : any) => {
        return classes.filter(Boolean).join(' ');
    }

    const scrollPosition = useScrollPosition ()
    console.log(scrollPosition);


    return (
        // <div className="fixed w-full top-0 left-0 bg-white flex justify-between p-4 px-8 md:px-16 items-center shadow z-50" data-aos="bg">
        <div className='dashboard-header'>
            <div className="fixed first-letter:fixed w-full top-0 left-0 bg-white flex justify-between p-4 md:px-8 items-center shadow z-50" data-aos="bg">

                <div className="cursor-pointer flex flex-row items-center gap-4 w-full">
                    
                    <div onClick={handleNav} className="block md:hidden">
                        {!nav ? <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="" width={24}></img> : <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" className="" width={24}></img>}
                    </div>
                    <div className="flex justify-start items-start font-bold lg:text-3xl md:text-2xl">THIS<span className="text-sky-600">Logo</span></div>
                </div>
                <div className="pr-0 xl:pr-16">
                    <ul className="flex md:gap-6 lg:gap-12 cursor-pointer">
                        <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><img src="https://cdn-icons-png.flaticon.com/512/6816/6816519.png" alt="bell-icon" width={36}/></Link>
                        </li>
                        <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><img src="https://cdn-icons-png.flaticon.com/512/747/747545.png" alt="user-icon" width={36}/></Link>
                        </li>
                        <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><img src="https://cdn-icons-png.flaticon.com/512/9623/9623063.png" alt="envelope-icon" width={36}/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className={!nav ? 'hidden ease-in-out duration-300 shadow-xl h-full w-60 pl-5 pt-2 pb-20 md:flex flex-col justify-between fixed' : 'fixed flex flex-col justify-between transition-all ease-in duration-300 md:hidden shadow-xl h-full w-1/2 pl-5 pt-20 pb-10'}>
                <ul className=" justify-start items-start cursor-pointer gap-2">
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><BiHomeAlt2 /><span className="w w-28"> Home</span> </Link>
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><MdOutlineInfo /><span className="w w-28">About</span> </Link>
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="services" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><RiServiceLine /><span className="w w-28">Services</span> </Link>
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="contact" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><BsTelephone /><span className="w w-28">Contact</span></Link>
                    </li>
                </ul>
                <ul className=" justify-start items-start cursor-pointer gap-2">
                <hr />
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><BsMoon /><span className="w w-28">Dark Mode</span> </Link>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className=" flex-row items-center gap-4"><BsSun /><span className="w w-28">Light Mode</span> </Link>
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><FaQuestionCircle /> <span className="w w-28">FAQs</span></Link>
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                    <Linked href="/components/auth/signin" className=" flex flex-row items-center gap-4"><MdLogout /><span className="w w-28">Log-out</span> </Linked>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;