import React from 'react';

const footer = () => {
  return (
    <div className="-z-10">
        <div className="flex flex-row justify-center items-center text-center md:ml-60 overflow-hidden bg-gray-600">
          <h1 className=" text-gray-200 md:font-semibold">
            © 2022-2023 All rights reserved | Build with ❤ by{" "}
            <span className="hover:text-blue-600 md:font-semibold cursor-pointer">
              Team RSE INTERNS{" "}
            </span>
          </h1>
        </div>
      </div>
  )
}

export default footer;