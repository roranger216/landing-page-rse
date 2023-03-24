import React, { useState, useEffect } from 'react'

import { Link } from 'react-scroll'
import Linked from 'next/link'
import Darkmode from './darkmode'
import useScrollPosition from './hooks/scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick

  // Function for scrolling effect Navbar
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  }

  const scrollPosition = useScrollPosition()
  // Function for scrolling effect Navbar


    return (
      <div
        id="nav-holder"
        className={classNames(
          scrollPosition > 0 ? "shadow-md" : "shadow-none py-4 md:py-6",
          "fixed w-full top-0 left-0 flex justify-between bg-white p-4 px-8 md:px-6 lg:px-16 items-center z-50"
        )}
      >
        <div className="cursor-pointer pl-0 xl:pl-16">
          <div className="flex font-bold text-xl md:text-3xl">
            THIS<span className="text-sky-600">Logo</span>
          </div>
        </div>
        <div className="pr-0 xl:pr-16">
          <ul className="hidden md:flex items-center md:gap-4 lg:gap-12 cursor-pointer">
            <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent hover:border-b-2 hover:border-sky-600 ease-in-out duration-500">
              <Link
                id="nav-element"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent hover:border-b-2 hover:border-sky-600 ease-in-out duration-500">
              <Link
                id="nav-element"
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent hover:border-b-2 hover:border-sky-600 ease-in-out duration-500">
              <Link
                id="nav-element"
                to="services"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="text-lg p-2 pb-0 font-medium border-b-2 border-transparent hover:border-b-2 hover:border-sky-600 ease-in-out duration-500">
              <Link
                id="nav-element"
                to="contact"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Darkmode />
            </li>
            <li className="mt-2">
              <Linked
                id="signin"
                href="/components/auth/signin"
                className="text-lg px-4 py-1 font-medium border-2 bg-sky-600 border-sky-600 text-white hover:bg-sky-800 hover:border-sky-800 rounded-md ease-in duration-200"
              >
                Sign In
              </Linked>
            </li>
          </ul>

        <div className="flex items-center md:hidden">
          <div className="mr-8 w-4"><Darkmode /></div>
          <div onClick={handleNav} className="block md:hidden">
            {!nav ? (<img id="nav-btn" src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="" width={18} ></img>) : (<img id="nav-btn" src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" className="" width={18} ></img>)}
          </div>
        </div>
        <div
          className={
            !nav ? "hidden" : "fixed ease-in-out duration-300 md:hidden mt-5"
          }
        >
          <ul id="mobile-nav-drop" className="flex flex-col gap-4 fixed left-0 top-22 uppercase p-6 text-center bg-slate-50 w-full shadow-2xl">
            <li className="text-sm md:text-md font-medium p-2 rounded-md">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}

              >
                Home
              </Link>
            </li>
            <li className="text-sm md:text-md font-medium p-2 rounded-md">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="text-sm md:text-md font-medium p-2 rounded-md">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="text-sm md:text-md font-medium p-2 rounded-md">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <Linked
              href="/components/auth/signin"
              className="text-sm md:text-md px-0 py-2 rounded-md font-medium bg-sky-600 text-white"
            >
              Sign In
            </Linked>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;