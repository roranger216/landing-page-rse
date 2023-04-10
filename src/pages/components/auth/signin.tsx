import React, { useState, ChangeEvent, } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import Link from 'next/link';
import { accountArray } from './accounts';
import bg from '../../../assets/img/f-bg.jpg';

const SignIn = () => {

  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const triggerAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const loginDto = { email, password };
    const response = await fetch('http://localhost:3008/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginDto),
    });

    if (response.ok) {
      const { token } = await response.json();
      // save token to localStorage or state and redirect to another page
      console.log({ token });
      alert("You are in!");
      router.push('/main/homepage');
    } else {
      const { message } = await response.json();
      triggerAlert();
    }
  };

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

          {/* Red Alert */}
          {showAlert && (
            <div className=" w-full">
              <h1 className="text-red-600 text-center font-semibold text-base md:text-lg pb-4">
                Incorrect Email or Password!
              </h1>
            </div>
          )}
          {/* Red Alert */}

          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col justify-center items-center gap-4 max-[480px]:gap-4">
              <div className="w-full ">
                <input
                  type="email"
                  name="username"
                  placeholder="Email"
                  className="w-full h-3 text-justify pl-8 px-2 rounded-full border-2 border-blue-400 p-5"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="w-full ">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full h-3 text-justify pl-8 px-2 rounded-full border-2 border-blue-400 p-5"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}
              <div className="relative w-full ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full h-3 text-justify pl-8 px-2 rounded-full border-2 border-blue-400 p-5"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className="absolute top-1/3 right-3.5 text-black"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </i>
              </div>
              <button type="submit" className=" w-2/5 bg-blue-600 hover:bg-blue-400 p-1 rounded-md font-bold text-lg text-white hover:text-gray-200 my-6">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="buttons w-full">
          <div className="flex flex-col items-center justify-between">
            <div>
              <span className="text-black dark:text-white">
                Don&apos;t have an account?{" "}
              </span>
              <a href="#" className="text-blue-600 cursor-pointer">
                create account
              </a>
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
