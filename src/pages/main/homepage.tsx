import React from 'react'
import Header from './dashboard_header'

const Homepage = () => {
  return (
    <div className="HomePage">
      <nav className='z-10'>
        <Header />
      </nav>

      <div className="mt-16 overflow-hidden ">
        <div className="row w-screen">
          <div className="flex flex-col justify-center md:ml-60 bg-white">
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
            <div className="Logo flex justify-center items-center">
              <div className="flex flex-row flex-wrap justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/5431/5431676.png" alt="development" className='md:w-24' />
              </div>
              <div className="flex flex-row flex-wrap justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1352/1352837.png" alt="customization" className='md:w-24' />
              </div>
              <div className="flex flex-row flex-wrap justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/5431/5431676.png" alt="consultation" className='md:w-24' />
              </div>
              <div className="flex flex-row flex-wrap justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/4878/4878520.png" alt="documentation" className='md:w-24' />
              </div>
              <div className="flex flex-row flex-wrap justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/922/922699.png" alt="design" className='md:w-24' />
              </div>
              <div className="flex flex-row flex-wrap justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/6095/6095494.png" alt="It Works" className='md:w-24' />
              </div>
            </div>
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="-z-10">
        <div className="flex flex-row justify-center items-center text-center md:ml-60 overflow-hidden bg-gray-800">
          <h1 className=" text-gray-400 md:font-semibold">
            © 2022-2023 All rights reserved | Build with ❤ by{" "}
            <span className="hover:text-blue-600 md:font-semibold cursor-pointer">
              Team RSE INTERNS{" "}
            </span>
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage