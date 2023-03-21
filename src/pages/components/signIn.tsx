import React, { useState } from 'react'


const SignIn = () => {

  return (
        <div className="Sign-in w-full h-full left-0 top-0 fixed flex content-center justify-center items-center bg-black/75 z-20 ease-in duration-500">
            <div className="grid p-5 w-2/5 h-4/6 absolute bg-slate-100 rounded-md ease-in duration-500">
                <div className="logo flex justify-center">
                    <div className="Logo flex flex-col justify-center items-center">
                        <h1>RASINIX</h1>
                    </div>
    return (
        <div className="grid mt-20 mb-10">
            <div className="flex justify-center mb-10">
                <div className="Logo">
                    <h1 className="font-bold text-3xl">RASI<span className="text-sky-600">NIX</span></h1>
                </div>
            </div>
            <div className="inputs flex justify-center">
                <div className="flex w-full flex-col justify-center items-center gap-6">
                    <input type="text" name="username" placeholder="Email" className="w-3/4 h-1/3 text-justify px-2 rounded-md border-2 border-blue-300 p-5" />
                    <input type="password" name="password" placeholder="Password" className="w-3/4 h-1/3 text-justify px-2 rounded-md border-2 border-blue-300 p-5" />
                </div>
            </div>
            <div className="buttons w-full">
                <div className="flex flex-col items-center justify-between mb-20">
                    <button className=" w-2/5 bg-blue-600 hover:bg-blue-400 p-1 rounded-md font-bold text-lg text-white hover:text-gray-200">
                        Sign in
                    </button>
                    <div className="flex flex-col items-center">
                        <p className="flex flex-row max-[900px]:flex-col justify-center items-center">Don&apos;t have an account? <a href="" className='text-blue-600'>create account</a></p>
                        <a href="" className='text-blue-600'>forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;