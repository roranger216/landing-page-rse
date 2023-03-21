import React, { useState } from 'react'
import SignIn from './signIn'

const Content = () => {

    const [show, setShow] = useState(false)

    const showSignin = () => {
        const newShowState = !show;
        setShow(newShowState);
        console.log(`Button Clicked${newShowState ? '' : '1'}`);


    return (
        <div id="home" className="content flex flex-col lg:flex-row justify-between items-center pt-32 md:pt-10 lg:pt-40 xl:pt-20 pb-20 px-4 lg:px-0 m-4 md:m-20">


            <div>
                {showModal && (
                    <div className="modal w-full h-full top-0 left-0 fixed flex content-center justify-center items-center bg-black/75 z-20">
                        <div className=" w-5/6 lg:w-2/5 h-auto bg-slate-100 rounded-md p-5">

                            <div className="float-right">
                                <button className="text-slate-500 px-2 rounded-md font-bold text-4xl hover:text-red-600" onClick={closeSignInModal}>&times;</button>
                            </div>

                            <SignIn />
                        </div>
                    </div>
                )}
            </div>

            <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
                <h3 className="text-3xl lg:text-3xl font-medium">Efficient and Comprehensive</h3>
                <h4 className="text-4xl lg:text-6xl mt-1 font-bold text-sky-500">Software Solutions from Experts</h4>
                <p className="mt-4 text-sm md:text-lg">Our team of experienced developers has the skills and expertise necessary to create innovative software solutions that drive business growth and success.</p>

                <button className="mt-10 rounded-md bg-sky-600 text-white px-6 py-3 border hover:bg-sky-900 ease-in duration-300" onClick={showSignin}>
                    Get Started
                </button>
            </div>
            <div className="lg:w-1/2">
                <img className="w-full" src="https://amincodes.com/html/one-pages/flex-it/assets/images/hero/illustration-1.png" />
            </div>
        </div>

        // <div id="home" className="content flex flex-col lg:flex-row justify-between items-center pt-32 md:pt-10 lg:pt-40 xl:pt-0 pb-20 px-4 lg:px-0 m-4 md:m-20">
        //     {show && (
        //     <div className="modal">
        //         {show && (
        //             <div>
        //                 <div className="close h-3 fixed z-30">
        //                     <button className="float-right text-red-500 px-2 rounded-md font-bold text-5xl hover:text-red-200"
        //                     onClick={showSignin}>&times;</button>
        //                 </div>
        //                 <SignIn />
        //             </div>)}

        //     </div>)}
        //     <div className="flex flex-col lg:flex-row justify-between items-center pt-10 lg:pt-32 pb-20 px-4 lg:px-0 mx-14">
        //     <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
        //         <h3 className="text-3xl font-medium">Efficient and Comprehensive</h3>
        //         <h4 className="text-6xl mt-1 font-bold text-sky-500">Software Solutions from Experts</h4>
        //         <button className="mt-10 rounded-md bg-sky-600 text-white px-6 py-3 border hover:bg-sky-900 ease-in duration-300"
        //         onClick={showSignin}>
        //             Get Started
        //         </button>
        //     </div>
        //     <div className="lg:w-1/2">
        //         <img className="w-full" src="https://amincodes.com/html/one-pages/flex-it/assets/images/hero/illustration-1.png" />
        //     </div>
        // </div>
        // </div>

    )
}

export default Content;