import React, { useState} from 'react'
import SignIn from './signIn'

    const Content = () => {

        const [show, setShow] = useState(false)

        // const showSignin = () => {
        //     setShow(true)
        //     console.log("Button Clicked");
        // }
        const showSignin = () => {
            const newShowState = !show;
            setShow(newShowState);
            console.log(`Button Clicked${newShowState ? '' : '1'}`);
        };
        

    return (
        <div className="content transition ease-in duration-500">
            {show && (
            <div className="modal transition ease-in duration-500">
                {show && ( 
                    <div>
                        <div className="close h-3 fixed z-30">
                            <button className="float-right text-red-500 px-2 rounded-md font-bold text-5xl hover:text-red-200"
                            onClick={showSignin}>&times;</button>
                        </div>
                        <SignIn />
                    </div>)}
                
            </div>)}
            <div className="flex flex-col lg:flex-row justify-between items-center pt-10 lg:pt-32 pb-20 px-4 lg:px-0 mx-14">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
                <h3 className="text-3xl font-medium">Efficient and Comprehensive</h3>
                <h4 className="text-6xl mt-1 font-bold text-sky-500">Software Solutions from Experts</h4>
                <button className="mt-10 rounded-md bg-sky-600 text-white px-6 py-3 border hover:bg-sky-900 ease-in duration-300"
                onClick={showSignin}>
                    Get Started
                </button>
            </div>
            <div className="lg:w-1/2">
                <img className="w-full rounded-lg" src="https://cdn.dribbble.com/users/508588/screenshots/11263629/thg_m78_02_4x.jpg" />
            </div>
        </div>
        </div>
        
    )
}

export default Content;