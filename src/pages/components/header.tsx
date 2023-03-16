import React, { useState } from 'react'

const Header = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="shadow flex justify-between w-full p-6">
            <div className="">
                <div className="font-bold text-xl">THISLogo</div>
            </div>
            <div>
                <ul className="hidden md:flex gap-16 cursor-pointer">
                    <li className="text-lg">Home</li>
                    <li className="text-lg">About</li>
                    <li className="text-lg">Services</li>
                    <li className="text-lg">Contact</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="" width={24}></img> : <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" className="" width={24}></img>}
                </div>
                <div className={!nav ? 'hidden' : 'fixed' }>
                    <ul className="flex flex-col gap-2 fixed left-0 top-20 uppercase p-6 text-center bg-gray-200 w-full">
                        <li className="text-md mb-10">Home</li>
                        <li className="text-md mb-10">About</li>
                        <li className="text-md mb-10">Services</li>
                        <li className="text-md">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header