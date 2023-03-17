import React from 'react'

const Content = () => {
    return (
        <div id="home" className="flex flex-col lg:flex-row justify-between items-center pt-40 md:pt-10 lg:pt-32 pb-20 px-4 lg:px-0 m-4 md:m-20">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
                <h3 className="text-3xl lg:text-3xl font-medium">Efficient and Comprehensive</h3>
                <h4 className="text-4xl lg:text-6xl mt-1 font-bold text-sky-500">Software Solutions from Experts</h4>
                <button className="mt-10 rounded-md bg-sky-600 text-white px-6 py-3 border hover:bg-sky-900 ease-in duration-300">
                    Get Started
                </button>
            </div>
            <div className="lg:w-1/2">
                <img className="w-full rounded-lg" src="https://cdn.dribbble.com/users/508588/screenshots/11263629/thg_m78_02_4x.jpg" />
            </div>
        </div>
    )
}

export default Content;