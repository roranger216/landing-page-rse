import React from 'react'

const Content = () => {
    return (
        <div id="home" className="flex flex-col lg:flex-row justify-between items-center pt-32 md:pt-10 lg:pt-20 pb-20 px-4 lg:px-0 m-4 md:m-20">
            {/* <div className="absolute bottom-0 left-0 w-full h-1/6 bg-sky-300 z-1"></div> */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
                <h3 className="text-3xl lg:text-3xl font-medium">Efficient and Comprehensive</h3>
                <h4 className="text-4xl lg:text-6xl mt-1 font-bold text-sky-500">Software Solutions from Experts</h4>
                <p className="mt-4 text-sm md:text-lg">Our team of experienced developers has the skills and expertise necessary to create innovative software solutions that drive business growth and success.</p>
                <button className="mt-10 rounded-md bg-sky-600 text-white px-6 py-3 border hover:bg-sky-900 ease-in duration-300">
                    Get Started
                </button>
            </div>
            <div className="lg:w-1/2">
                <img className="w-full rounded-lg" src="https://amincodes.com/html/one-pages/flex-it/assets/images/hero/illustration-1.png" />
            </div>
        </div>
    )
}

export default Content;