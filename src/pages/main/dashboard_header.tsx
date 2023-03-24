import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Linked from 'next/link'
import useScrollPosition from '../components/hooks/scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsTelephone } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { BiHomeAlt2, BiEnvelope } from 'react-icons/bi';
import { MdLogout, MdOutlineInfo } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineUser, AiOutlineBell } from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa'
import Darkmode from './darkmode_dashboard'

const Header = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    const [darkMode, setDarkMode] = useState(false)
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

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    return (
        <div className='dashboard-header'>
            
            <div 
                id="nav-admin" className={classNames(
                scrollPosition > 0 ? "shadow-md" : "shadow py-4",
                "fixed w-full top-0 left-0 flex justify-between bg-white p-4 px-4 md:px-6 lg:px-16 items-center z-50"
                )} data-aos="bg">

                <div className="cursor-pointer flex flex-row items-center gap-4 w-full">
                    
                    <div onClick={handleNav} className="block md:hidden text-3xl">
                        {!nav ? <FaBars /> : <FaTimes />}
                    </div>
                    <div className="flex justify-start items-start font-bold lg:text-3xl md:text-2xl">
                        <Link to="logo" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>THIS<span className="text-sky-600">Logo</span></Link> 
                    </div>
                </div>
                <div className="pr-0 xl:pr-6">
                    <ul className="flex md:gap-6 lg:gap-6 cursor-pointer">
                        <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                            <Link to="bell" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><div  className='text-2xl'><AiOutlineBell /></div></Link>
                        </li>
                        <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                            <Link to="user" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><div  className='text-2xl'><AiOutlineUser /></div></Link>
                        </li>
                        <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><div  className='text-2xl bg-gradient-to'><BiEnvelope className='hover:text-blue-500'/></div></Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div id="nav-holder2" className={!nav ? 
                'hidden ease-in-out duration-300 shadow-xl shadow-right h-full w-60 pl-5 pt-2 pb-24 bg-white dark:bg-gray-900 md:flex flex-col justify-between fixed' : 

                'fixed flex flex-col justify-between transition-all ease-in duration-300 shadow-lg shadow-right border-r-2 border-slate-700 md:hidden h-full w-1/2 pl-5 pt-2 pb-24'}>

                <ul className=" justify-start items-start cursor-pointer gap-2
                ">
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><BiHomeAlt2 /><span className="w-28 "> Dashboard</span> </Link>
                    </li>
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><MdOutlineInfo /><span className="w-28">About</span> </Link>
                    </li>
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link to="services" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><RiServiceLine /><span className="w-28">Services</span> </Link>
                    </li>
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link to="contact" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4"><BsTelephone /><span className="w-28">Contact</span></Link>
                    </li>
                </ul>
                <ul className=" justify-start items-start cursor-pointer gap-2">
                <hr />
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500 flex flex-row items-center gap-4"  onClick={handleDarkMode}><Darkmode />
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} onClick={closeMenu} className=" flex flex-row items-center gap-4 hover:text-sky-600"><FaQuestionCircle /> <span className="w-28">FAQs</span></Link>
                    </li>
                    <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent  ease-in-out duration-500">
                    <Linked href="/components/auth/signin" className=" flex flex-row items-center gap-4 hover:text-sky-600"><MdLogout /><span className="w-28">Log-out</span> </Linked>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;