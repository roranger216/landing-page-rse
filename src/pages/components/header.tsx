import React, { useState } from 'react'

const Header = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between w-full p-6">
            <div className="">
                <div className="font-bold text-xl">THISLogo</div>
            </div>
            <div className="">
                <ul className="flex flex-row gap-14 hidden">
                    <li className="text-lg">Home</li>
                    <li className="text-lg">About</li>
                    <li className="text-lg">Services</li>
                    <li className="text-lg">Contact</li>
                </ul>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" className="" width={24}></img>
                </div>
                <div>
                    <ul className="flex flex-col gap-2 fixed left-0 top-20 uppercase p-6 text-center bg-gray-200 w-full">
                        <li className="text-lg mb-2">Home</li>
                        <li className="text-lg mb-2">About</li>
                        <li className="text-lg mb-2">Services</li>
                        <li className="text-lg">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header