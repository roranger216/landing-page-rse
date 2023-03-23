import React, { useState,ChangeEvent,useEffect } from 'react'
import bg from '../../assets/img/f-bg.jpg';
import Image from 'next/image';

const SignIn = () => {

    const [accountArray, setAccountArray] = useState([
        {id:1, email:'jayson@gmail.com', password:'123456'},
        {id:2, email:'dsteph@gmail.com',password:'hey'}
    ]);


    const [emailValue, setEmail] = useState(""); // for email 
 
    const [passwordValue, setPasswordValue] =useState("")

    const [showAlert, setShowAlert] = useState(false); //alert

    const handleEmail =(event: ChangeEvent<HTMLInputElement> ) =>{
        setEmail( event.target.value);
    }

    const handlePassword =(event: ChangeEvent<HTMLInputElement>)=>{
        setPasswordValue(event.target.value)
    }
    const triggerAlert =()=>{
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
    }
     const handleButtonClick = () => {
       // Perform action when button is clicked
         if (emailValue.trim() == ''){
           
           triggerAlert()
         }
         else if ( emailValue.includes('@') && emailValue.includes('.')){  
                if(accountArray.find(obj =>obj.email == emailValue)){
                    if(accountArray.find(obj =>obj.password == passwordValue)){
                        alert('Hooray')
                    }
                    else{
                      triggerAlert()
                    }
                }
                else{
                    setShowAlert(true)
                    setTimeout(() => {
                      setShowAlert(false);
                    }, 3000);
                }
           
         }
         else{
            
          triggerAlert()
         }
       
        }
    return (
      <div className=" w-screen h-screen flex justify-center items-center ">
        <Image 
        alt='bg'
        src={bg} className="w-screen h-screen -z-10 brightness-50"
        />

        <div
          className="grid absolute bg-white rounded-2xl shadow-2xl shadow-black/40
                        max-[480px]:w-full h-5/6
                        max-sm:w-3/4 sm:h-5/6 sm:border-0
                        sm:w-3/4
                        md:w-1/2 md:h-3/4  
                        lg:w-2/4
                        xl:w-1/3 p"
        >

          <div className="flex justify-center">
            <div className="Logo flex justify-center items-center">
              <h1 className="font-bold text-3xl mb-8">
                THIS<span className="text-blue-600">Logo</span>
              </h1>
            </div>
          </div>

          <div className="inputs flex flex-col justify-center">
            {showAlert && (
              <div className=" w-full">
                <h1
                  className="text-red-600 text-center font-semibold text-base md:text-lg"
                >
                  Incorrect Email or Password!
                </h1>
              </div>
            )}

            <div className="flex w-full flex-col justify-center items-center gap-6 max-[480px]:gap-4">
              <input
                value={emailValue}
                onChange={handleEmail}
                type="email"
                name="username"
                placeholder="Email"

                required
                className="w-3/4 h-1/3 text-justify pl-8 px-2 rounded-full border-2 border-blue-300 p-5"

              />
              <input
                value={passwordValue}
                onChange={handlePassword}
                type="password"
                name="password"
                placeholder="Password"

                required
                className="w-3/4 h-1/3 text-justify pl-8 px-2 rounded-full border-2 border-blue-300 p-5"

              />
            </div>
          </div>
          <div className="buttons w-full">
            <div className="flex flex-col items-center justify-between">
              <button
                onClick={handleButtonClick}
                type="submit"
                className=" w-2/5 bg-blue-600 hover:bg-blue-400 p-1 rounded-md font-bold text-lg text-white hover:text-gray-200 my-6">
                Sign In
              </button>
              <div>
                <span>Don&apos;t have an account? </span><a href="#" className="text-blue-600 cursor-pointer">create account</a>
              </div>
              <div>
                <a href="#" className="text-blue-600 cursor-pointer">Forgot password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignIn;