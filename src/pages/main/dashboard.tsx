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
            <div className="text-xl text-center font-bold">Dashboard</div>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Content;