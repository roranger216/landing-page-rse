import React from 'react'
import Image from 'next/image'
import AUPix from '../../assets/img/aboutus.jpg'

const about = () => {
    return (
        <>
            <div id="about" className="bg-slate-200 dark:bg-slate-800 text-center w-full mb-32 p-8 lg:px:10 2xl:px-48 lg:py-16 mt-28">
                <div className="flex-col items-center justify-center">
                    <div className="text-3xl lg:text-4xl font-bold text-sky-600 pb-4">
                        Few Words About Us
                    </div>
                    <div className="text-center text-sm lg:text-base xl:mx-52">
                        We specialize in delivering software development solutions that cater to the unique needs of our clients. Whether you're an individual looking for a custom app, a startup in need of a scalable platform, a medium-sized business looking to streamline operations, or a large enterprise in search of cutting-edge technology, we have the expertise to meet your demands.
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-20 justify-center items-center">
                    <div className="w-1/2 flex mb-8 lg:mb-0 lg:justify-end lg:mr-20">
                        <Image className="rounded" src={AUPix} alt="About Us" width={500}></Image>
                        {/* Image from Splash */}
                    </div>
                    <div className="flex-col w-full lg:w-1/2">
                        <div className="w-full lg:w-4/5 lg:text-left mb-10 lg:mb-0 text-sm xl:text-base">
                            We pride ourselves on staying ahead of the technology curve to provide futuristic software solutions. Our team of UI designers and app developers are equipped with the latest technology to ensure that clients receive top-notch software solutions. We work closely with our clients to develop customized software solutions that meet their unique business needs and objectives. With our global reach, we are committed to delivering software solutions that enable businesses to compete on a global scale and achieve success in their respective industries.
                        </div>
                        <a className="bg-sky-600 text-lg text-white font-bold lg:float-left px-6 py-2 rounded-full mt-12 mb-4 cursor-pointer hover:bg-sky-800 ease-in duration-300">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about