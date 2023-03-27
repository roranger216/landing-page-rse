import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsTelephone } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { BiHomeAlt2, BiEnvelope } from 'react-icons/bi';
import { MdLogout, MdOutlineInfo } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineUser, AiOutlineBell } from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { FiSettings } from 'react-icons/Fi'
import Darkmode from './darkmode'

const Header = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [darkMode, setDarkMode] = useState(false)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick

    const [dropdown, setdropdown] = useState(false)
    const handleDropdown = () => {
        setdropdown(!dropdown)
    }


    return (
        <div className='dashboard-header'>

            <div id="nav-admin" className="fixed w-full shadow-md top-0 left-0 flex justify-between bg-white p-4 px-4 md:px-6 lg:px-16 items-center z-50" data-aos="bg">

                <div className="cursor-pointer flex flex-row items-center gap-4 w-full">

                    <div onClick={handleNav} className="block md:hidden text-3xl">
                        {!nav ? <FaBars /> : <FaTimes />}
                    </div>
                    <div className="flex justify-start items-start font-bold lg:text-3xl md:text-2xl">
                        THIS<span className="text-sky-600">Logo</span>
                    </div>
                </div>
                <div className="">
                    <ul className="flex cursor-pointer md:gap-4 items-center">
                        <li className="text-lg font-medium p-2">
                            <div className='text-2xl items-center text-slate-600'>
                                <Darkmode />
                            </div>
                        </li>
                        <li className="text-lg font-medium p-2">
                            <div className='text-2xl items-center'>
                                <AiOutlineBell className='hover:text-blue-500 text-slate-600' />
                            </div>
                        </li>
                        <li className="text-lg font-medium p-2">
                            <div className='text-2xl items-center'>
                                <BiEnvelope className='hover:text-blue-500 text-slate-600' />
                            </div>
                        </li>
                        <li onClick={handleDropdown} className="text-lg font-medium hover:bg-sky-200 rounded md:ml-6 p-2">
                            <div className='flex items-center'>
                                <FaUserCircle className="text-2xl mr-3 text-slate-500" />
                                Username
                            </div>
                        </li>
                        <div className={!dropdown ? "hidden" : "fixed ease-in-out duration-300"}>
                            <ul id="mobile-nav-drop" className="flex flex-col fixed right-10 top-20 text-left bg-slate-50 shadow-xl dark:bg-gray-800">
                                <li className="flex text-md hover:bg-sky-200 p-4 pl-4 pr-8 border-b-2 border-slate-200">
                                <AiOutlineUser className="text-xl mr-2" />
                                    <Link href="" className="">User Account</Link>
                                </li>
                                <li className="flex text-md hover:bg-sky-200 p-4 pl-4 pr-8">
                                <MdLogout className="text-xl mr-2" />
                                    <Link href="" className="">Logout</Link>
                                </li>

                            </ul>
                        </div>
                    </ul>
                </div>
            </div>

            <div id="" className={!nav ?
                'hidden ease-in-out duration-300 shadow-xl shadow-right h-full w-60 pl-5 bg-white dark:bg-slate-700 md:flex flex-col justify-between fixed' :

                'fixed flex flex-col justify-between transition-all ease-in duration-300 bg-white dark:bg-slate-700  shadow-lg shadow-right md:hidden h-full w-1/2 pl-5'}>

                <ul className=" justify-start items-start cursor-pointer gap-2 mt-4">
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link href="./homepage" className=" flex flex-row items-center gap-4"><BiHomeAlt2 /><span className="w-28 "> Dashboard</span> </Link>
                    </li>
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link href="./settings" className=" flex flex-row items-center gap-4"><MdOutlineInfo /><span className="w-28">About</span> </Link>
                    </li>
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link href="./services" className=" flex flex-row items-center gap-4"><RiServiceLine /><span className="w-28">Services</span> </Link>
                    </li>
                    <li className="text-lg p-4 py-3 font-medium border-b-2 border-transparent  ease-in-out duration-500 hover:bg-sky-300 m-2 ml-0 rounded">
                        <Link href="./settings" className=" flex flex-row items-center gap-4"><FiSettings /><span className="w-28">Settings</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;