import React, { useState } from 'react'

const Header = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="shadow-lg flex justify-between w-full p-4 pl-16 pr-16 items-center">
            <div className="cursor-pointer">
                <div className="font-bold text-xl">THISLogo</div>
            </div>
            <div>
                <ul className="hidden md:flex gap-12 cursor-pointer">
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md">Home</li>
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md">About</li>
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md">Services</li>
                    <li className="text-lg p-2 font-medium hover:bg-sky-200 rounded-md">Contact</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="" width={24}></img> : <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" className="" width={24}></img>}
                </div>
                <div className={!nav ? 'hidden' : 'fixed'}>
                    <ul className="flex flex-col gap-4 fixed left-0 top-16 uppercase p-6 text-center bg-white w-full shadow-2xl">
                        <li className="text-md font-medium p-2 rounded-md hover:bg-sky-200">Home</li>
                        <li className="text-md font-medium p-2 rounded-md hover:bg-sky-200">About</li>
                        <li className="text-md font-medium p-2 rounded-md hover:bg-sky-200">Services</li>
                        <li className="text-md font-medium p-2 rounded-md hover:bg-sky-200">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header