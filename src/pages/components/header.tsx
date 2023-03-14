import React from 'react'

const Head = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row shadow-lg">
      <div className="text-center">
        <div className="lg:m-6 m-2 font-bold text-xl p-2">THISLogo</div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20 lg:m-6 font-medium text-lg cursor-pointer">
        <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300">Home</div>
        <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300">About</div>
        <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300">Services</div>
        <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300">Contact</div>
      </div>



      {/* <div className="flex flex-col justify-center items-center shadow-lg">
        <div className="m-6 font-bold text-xl p-2">THISLogo</div>
        <div className="flex flex-col justify-center items-center w-full font-medium text-lg cursor-pointer">
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300 my-2 w-5/6 text-center">Home</div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300 my-2 w-5/6 text-center">About</div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300 my-2 w-5/6 text-center">Services</div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300 my-2 w-5/6 text-center">Contact</div>
        </div>
      </div> */}




    </div>
  )
}

export default Head