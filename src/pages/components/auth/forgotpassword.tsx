import React from 'react'
import Image from 'next/image'
import bg2 from "../../../assets/img/bg-2.jpg";
import PasswordReset from './passwordreset';
const ForgotPassword=() => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image
        alt="bg"
        src={bg2}
        className="w-screen h-screen -z-10 brightness-50"
      />

      <div className="absolute flex flex-col justify-center items-center xl:w-1/3 h-3/4 md: w-3/5 sm:w-4/6 max-sm:w-5/6 max-[480px]:w-full max-[480px]:h-2/3">
        <div className="Logo w-full h-auto flex justify-center items-center">
          <h1 className="font-bold text-3xl mb-8">
            THIS<span className="text-sky-600">Logo</span>
          </h1>
        </div>
        <PasswordReset/>
      </div>
    </div>
  );
}
export default ForgotPassword
