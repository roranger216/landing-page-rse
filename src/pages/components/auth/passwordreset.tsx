import React from "react";
import { BiEnvelope, BiArrowBack } from "react-icons/bi";
import { IoChevronBackSharp } from "react-icons/io5";

import { accountArray } from "./accounts";
import { useState } from "react";

export default function PasswordReset() {
  // check the input email if it is in the database

  
  const [forgottenemail, setForgottenEmail] = useState("");
  const [alert, setAlert] =useState(false);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForgottenEmail(event.target.value);
  };

  const message1 = 'Please provide'
  const warning =()=>{
    setAlert(true);
    setTimeout(()=> {
      setAlert(false);
    },3000);
  }

  const emailChecker = () => {
    const toFind = accountArray.find(acc => acc.email === forgottenemail)
    console.log(toFind)
    if (!toFind){
      warning()
    }
    else if (toFind.email ===''){
      warning()
    }
    else{

    }
  }

  return (
    <div className="bg-white bg-opacity-90 flex flex-col items-center w-5/6 h-auto rounded-xl shadow-2xl shadow-black/40">
      <div className="w-full h-auto">
        <h1 className="text-black text-center py-3 font-bold">
          Forgot Password ?
        </h1>
      </div>
      <div className="w-3/4 h-auto">
        <p className="text-black text-center">
          Enter your email and we'll send you a code to reset your password.
        </p>
      </div>

      <div
        id="email-input-holder"
        className="relative w-3/4 max-[480px]:my-4 h-auto max-sm:my-9 sm:my-11"
      >
        <input
          type="email"
          value={forgottenemail}
          name="email"
          onChange={handleEmail}
          className="w-full rounded-lg max-[480px]:h-14 bg-white pl-8 text-black border border-blue-700 max-sm:h-12 sm:h-12"
          placeholder="Email"
          required
        />
        <i className="absolute top-1/4 right-full left-1 text-slate-400 text-2xl">
          <BiEnvelope />
        </i>
      </div>
      {alert && (
        <div className=" w-full">
          <h1 className="text-red-600 text-center font-semibold text-base md:text-lg">
            Email not Found
          </h1>
        </div>
      )}
      <div className="w-1/2 h-auto my-2 ">
        <button
          onClick={emailChecker}
          className="w-full h-9 bg-green-700 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="w-full h-1/3 flex justify-center items-center my-7">
        <div className="flex items-center ">
          <button className=" max-sm:text-2xl text-black">
            <IoChevronBackSharp />
          </button>
          <h3 className="ml-1 text-blue-400">Back to login</h3>
        </div>
      </div>
    </div>
  );
};
