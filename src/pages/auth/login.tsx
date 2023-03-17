import React from 'react';

const login = () => {
    return (
        <div className="sign-in-form w-full h-screen pt-60 bg-slate-100">
            <div className="flex flex-col w-1/4 items-center m-auto bg-white shadow-2xl rounded">
                <div className="m-10 w-3/4">
                    <div className="mb-10 text-center items-center">
                        <h1 className="text-3xl">Welcome to <strong className="text-sky-600">THISPage</strong></h1>
                    </div>
                    <form className="flex flex-col">
                        <h1 className="text-lg mb-2">Email</h1>
                        <input className="border outline-sky-300 mb-4 p-2 rounded" type="email" placeholder="Email"></input>
                        <h1 className="text-lg mb-2">Password</h1>
                        <input className="border outline-sky-300 mb-6 p-2 rounded" type="password" placeholder="Password"></input>
                        <input className="border mb-6 p-2 rounded bg-sky-600 text-white border-none mt-2" type="submit" value="login"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login;