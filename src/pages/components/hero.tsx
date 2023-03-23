import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { duration } from '@material-ui/core'
import Register from './register'

const Content = () => {

    useEffect(() => {
        AOS.init({duration: 600})
    }, [])
  
    const [showModal, setShowModal] = useState(false);

    const closeSignInModal = () => {
        setShowModal(false);
    };


    return (
      <div
        id="home"
        className="content flex flex-col lg:flex-row justify-between items-center pt-32 md:pt-10 lg:pt-40 xl:pt-20 pb-20 px-4 lg:px-0 m-4 md:m-20"
      >
        <div>
          {showModal && (
            <div className="animation modal w-full h-full top-0 left-0 fixed flex content-center justify-center items-center bg-black/75 z-50">
              <div
                className="bg-slate-100 w-5/6 dark:bg-slate-100 lg:w-1/2 h-11/12 md:w-3/4 rounded-md p-5 max-sm:h-4/5 overflow-y-scroll scroll-px-0 scroll-m-0 scroll-smooth"
                data-aos="fade-up"
              >
                <div className="float-right">
                  <button
                    className="text-slate-500 px-2 rounded-md font-bold text-4xl hover:text-red-600"
                    onClick={closeSignInModal}
                  >
                    &times;
                  </button>
                </div>

                <Register />
              </div>
            </div>
          )}
        </div>

        <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
          <h3 className="text-3xl lg:text-3xl font-medium">
            Efficient and Comprehensive
          </h3>
          <h4 className="text-4xl lg:text-6xl mt-1 font-bold text-sky-500">
            Software Solutions from Experts
          </h4>
          <p className="mt-4 text-sm md:text-lg">
            Our team of experienced developers has the skills and expertise
            necessary to create innovative software solutions that drive
            business growth and success.
          </p>
          <button
            className="mt-10 rounded-md bg-sky-600 text-white px-6 py-3 border hover:bg-sky-900 ease-in duration-300 animate-bounce"
            onClick={() => setShowModal(true)}
          >
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full"
            src="https://amincodes.com/html/one-pages/flex-it/assets/images/hero/illustration-1.png"
          />
        </div>
      </div>
    );
}

export default Content;