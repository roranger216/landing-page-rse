import React from 'react';
import Header from './template';
import Footer from './footer';

const Content = () => {
    return (
        <div className="Content">
            <nav className='z-10'>
                <Header />
            </nav>

            <div className="mt-16 overflow-hidden ">
                <div className="row w-screen p-8 rounded-lg bg-gray-100 dark:bg-slate-900">
                    <div className="flex flex-col justify-center md:ml-60 bg-white dark:bg-slate-800 p-8 rounded-md">

                        {/* Content Here */}
                        <div className="text-xl text-center font-bold"></div>

                        <div className="flex flex-col xl:flex-row w-full items-center justify-center">
                            
                                <div><img className="rounded-full xl:mr-16 w-300" src="https://static.wikia.nocookie.net/bleach-and-fairy-tail/images/1/1b/Natsu_Dragneel.jpg" width="180px"></img></div>
                                <div className="w-full xl:w-1/2">
                                    <div className="flex flex-col text-center xl:text-left">
                                        <div className="text-2xl font-bold">John Doe</div>
                                        <div className="text-md font-bold mb-2">Full Stack Developer</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum voluptas modi laudantium nobis inventore incidunt nisi ipsa! Deserunt quisquam porro unde veritatis voluptatum commodi delectus veniam, temporibus sunt quidem.</p>
                                    </div>
                                </div>

                            <div className="flex flex-col xl:border-l-2 pl-4 mt-6 xl:mt-0 ml-8 w-full lg:w-80">
                                <div>
                                    <div className="font-bold mb-2">Personal Details</div>
                                </div>
                                <div className="flex w-full">
                                    <div className="font-semibold">
                                        <div>Birthdate: January 1, 1990</div>
                                        <div>Age: 33</div>
                                        <div>Contact No.: 09123456789</div>
                                        <div>Address: Earth 616</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <Footer /> */}

        </div>
    )
}

export default Content;