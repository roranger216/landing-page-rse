import React, { useState, ChangeEvent, } from 'react'
import bg from '../../../assets/img/f-bg.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router'
import {BsEye,BsEyeSlash} from 'react-icons/bs'
import Link from 'next/link';

import { accountArray } from './accounts';
const SignIn = () => {
  
  // Call the useRouter hook to perform router.push
  const router = useRouter();
  // Call the useRouter hook to perform router.push

  // const accountArray =[
  //   { id: 1, email: 'jayson@gmail.com', password: '123456' },
  //   { id: 2, email: 'dsteph@gmail.com', password: 'hey' },
  //   { id: 3, email: 'roger@gmail.com', password: 'jjj' },
  //   { id: 4, email: 'grytz@gmail.com', password: 'chang' },
    
  // ];


  const [emailValue, setEmail] = useState(""); // for email

  const [passwordValue, setPasswordValue] = useState("") //for password

  const [showAlert, setShowAlert] = useState(false); //alert

  const [showPassword, setShowPassword] = useState(false); // to view password
  

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
  }
  

  const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

  const triggerAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }
  const handleButtonClick = () => {
    // Perform action when button is clicked
    if (emailValue.trim() == '') {

      triggerAlert()
    }
    else if (emailValue.includes('@') && emailValue.includes('.')) {
      if (accountArray.find(obj =>emailValue  === obj.email )) {
          
          const email = accountArray.find((item) => item.email == emailValue) 
          console.log(email )
          if (passwordValue == email?.password){
          console.log('yes')
           router.push("/main/settings");
        }

          else{
            triggerAlert()
          }
          
        // if (accountArray.find(obj => passwordValue == obj.id && obj.password)) {
        //   // alert('Hooray');
        //   router.push('/main/dashboard');
        // }
        // else {
        //   triggerAlert()
        // }
      }
      else {
          triggerAlert()
      }

    }
    else {

      triggerAlert()
    }

  }
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <Image
        alt="bg"
        src={bg}
        className="w-screen h-screen -z-10 brightness-50"
      />
      <div
        id="signin-card"
        className="bg-white dark:bg-slate-800 grid absolute rounded-2xl shadow-2xl shadow-black/40 sm:w-3/5 md:w-1/2 lg:w-1/3 px-8 xl:px-20 py-20"
      >
        <div className="flex justify-center">
          <div className="Logo flex justify-center items-center">
            <h1 className="font-bold text-3xl mb-8">
              THIS<span className="text-sky-600">Logo</span>
            </h1>
          </div>
        </div>

        <div className="inputs flex flex-col justify-center">
          {showAlert && (
            <div className=" w-full">
              <h1 className="text-red-600 text-center font-semibold text-base md:text-lg">
                Incorrect Email or Password!
              </h1>
            </div>
          )}

          <div className="flex w-full flex-col justify-center items-center gap-4 max-[480px]:gap-4">
            <div className="w-full h-1/3 ">
              <input
                value={emailValue}
                onChange={handleEmail}
                type="email"
                name="username"
                placeholder="Email"
                className="w-full h-full  dark:text-black bg-white text-justify pl-8 px-2 rounded-full border-2 border-blue-400 p-5"
              />
            </div>
            <div className="relative w-full h-1/3">
              <input
                value={passwordValue}
                onChange={handlePassword}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full h-full dark:text-black bg-white text-justify pl-8 px-2 rounded-full border-2 border-blue-400 p-5"
              />
              <i
                className="absolute top-1/3 right-3.5 text-black"
                onClick={handleTogglePassword}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </i>
            </div>
          </div>
        </div>
        <div className="buttons w-full">
          <div className="flex flex-col items-center justify-between">
            <button
              onClick={handleButtonClick}
              type="submit"
              className=" w-2/5 bg-blue-600 hover:bg-blue-400 p-1 rounded-md font-bold text-lg text-white hover:text-gray-200 my-6"
            >
              Sign In
            </button>
            <div>
              <span className="text-black dark:text-white">
                Don&apos;t have an account?{" "}
              </span>
              <Link
                href="../landing-page/register"
                className="text-blue-600 cursor-pointer"
              >
                Create Account
              </Link>
            </div>
            <div>
              <Link
                href="./forgotpassword"
                className="text-blue-600 cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;