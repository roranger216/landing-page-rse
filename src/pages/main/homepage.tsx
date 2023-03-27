import React from 'react'
import Header from './template'
import Footer from './footer';

const Homepage = () => {
  return (
    <div className="HomePage">
      <nav className='z-10'>
        <Header />
      </nav>

      <div className="mt-16 overflow-hidden ">
        <div className="row w-screen">
          <div className="flex flex-col justify-center md:ml-60 ">
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
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="-z-10">
        <Footer />
      </div>
      
    </div>
  )
}

export default Homepage