import React from 'react';

const Contactus = () => {
  return (
    <div className="bg-[#9acaeb] w-2/5 p-6 rounded-lg shadow-lg">
      <form className="mx-auto">
        <div className="my-3 mx-auto">
          <input
            type="text"
            className="w-full mt-2 p-4 outline-none border-none rounded-lg"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="my-3 mx-auto">
          <input
            type="text"
            className="w-full mt-2 p-4 outline-none border-none rounded-lg"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="my-3 mx-auto">
          <input
            type="password"
            className="w-full mt-2 p-4 outline-none border-none rounded-lg"
            placeholder="Enter Your Password"
          />
        </div>

        <div className="my-3 mx-auto">
          <textarea
            className="w-full h-36 mt-2 p-4 outline-none border-none rounded-lg"
            placeholder="Type Message..."
          ></textarea>
        </div>

        <button className="w-full p-3 mt-2 bg-purple-600 text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-gray-900">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactus;
