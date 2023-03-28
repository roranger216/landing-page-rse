import React from 'react'
import Header from './template'
import Footer from './footer';
import Link from 'next/link';

function Services() {
  return (
    <div className='services bg-gray-100 dark:bg-gray-900'>
        <nav className='z-10'>
            <Header />
        </nav>
        <div className="mt-16 overflow-hidden ">
            <div className="row w-screen">
            <div className="flex flex-col justify-center md:ml-60 ">
                <h1 className='f font-extrabold text-center text-2xl m-8'>Services</h1>
                <div className="Logo w-full ">
                    <div className="w-auto shadow-xl shadow-black/10 grid grid-rows-3 min-[910px]:grid-rows-2 xl:grid-rows-1 grid-flow-col items-start p-2 md:m-11 gap-2">
                        <div id="service_logo" className="flex flex-row flex-wrap h-1/3 min-[1280px]:w-44 gap-6 justify-center p-3 rounded-t border border-b-0 border-slate-600">
                        <div id="logo2" className='md:w-16 rounded-full p-2 hover:scale-105 cursor-pointer'>
                            <Link href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/5431/5431676.png" alt="development" className='w-10 md:w-12' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h1 className='dark:text-gold-300 font-bold text-xl text-center md:text-sm'>
                            Development
                            </h1>
                            <p className='text-xs text-center md:text-sm lg:text-base indent-4 p-2 flex justify-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi eos nemo. Vero nihil, atque corrupti provident totam rem dicta.
                            </p>
                        </div>
                        </div>
                        <div id="service_logo" className="flex flex-row flex-wrap h-1/3 min-[1280px]:w-44 gap-6 justify-center p-3 rounded-t border border-b-0 border-slate-600">
                        <div id="logo2" className='md:w-16 rounded-full p-2 hover:scale-105 cursor-pointer'>
                            <Link href=""><img src="https://cdn-icons-png.flaticon.com/512/1352/1352837.png" alt="customization" className='w-10 md:w-12' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h1 className='dark:text-gold-300 font-bold text-xl text-center md:text-sm'>
                            Customization
                            </h1>
                            <p className='text-xs text-center md:text-sm indent-4 p-2 flex justify-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi eos nemo. Vero nihil, atque corrupti provident totam rem dicta.
                            </p>
                        </div>
                        </div>
                        <div id="service_logo" className="flex flex-row flex-wrap h-1/3 min-[1280px]:w-44 gap-6 justify-center p-3 rounded-t border border-b-0 border-slate-600">
                        <div id="logo1" className='md:w-16 rounded-full p-2 hover:scale-105 cursor-pointer'>
                            <Link href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/2961/2961226.png" alt="consultation" className='w-10 md:w-12' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h1 className='dark:text-gold-300 font-bold text-xl text-center md:text-sm'>
                            Consultation
                            </h1>
                            <p className='text-xs text-center md:text-sm indent-4 p-2 flex justify-center'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eius distinctio aperiam quae temporibus voluptate eveniet maxime quia ratione itaque.
                            </p>
                        </div>
                        </div>
                        <div id="service_logo" className="flex flex-row flex-wrap h-1/3 min-[1280px]:w-44 gap-6 justify-center p-3 rounded-t border border-b-0 border-slate-600">
                        <div id="logo2" className='md:w-16 rounded-full p-2 hover:scale-105 cursor-pointer'>
                            <Link href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/4878/4878520.png" alt="documentation" className='w-10 md:w-12' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h1 className='dark:text-gold-300 font-bold text-xl text-center md:text-sm'>
                            Documentation
                            </h1>
                            <p className='text-xs text-center md:text-sm indent-4 p-2 flex justify-center'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores reprehenderit distinctio harum omnis nostrum rerum libero eius, in mollitia dolorum.
                            </p>
                        </div>
                        </div>
                        <div id="service_logo" className="flex flex-row flex-wrap h-1/3 min-[1280px]:w-44 gap-6 justify-center p-3 rounded-t border border-b-0 border-slate-600">
                        <div id="logo1" className='md:w-16 rounded-full p-2 hover:scale-105 cursor-pointer'>
                            <Link href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/922/922699.png" alt="design" className='w-10 md:w-12' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h1 className='dark:text-gold-300 font-bold text-xl text-center md:text-sm'>
                            Design
                            </h1>
                            <p className='text-xs text-center md:text-sm indent-4 p-2 flex justify-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis voluptate obcaecati sint itaque totam! Enim dicta qui maiores deserunt!
                            </p>
                        </div>
                        </div>
                        <div id="service_logo" className="flex flex-row flex-wrap h-1/3 min-[1280px]:w-44 gap-6 justify-center p-3 rounded-t border border-b-0 border-slate-600">
                        <div id="logo2" className='md:w-16 rounded-full p-2 hover:scale-105 cursor-pointer'>
                            <Link href="">
                            <img src="https://cdn-icons-png.flaticon.com/512/6796/6796767.png" alt="It Works" className='w-10 md:w-12' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h1 className='dark:text-gold-300 font-bold text-xl text-center md:text-sm'>
                            Outsource
                            </h1>
                            <p className='text-xs text-center md:text-sm indent-4 p-2 flex justify-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident eligendi aut ipsam rem nemo impedit odio suscipit aspernatur asperiores.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Services