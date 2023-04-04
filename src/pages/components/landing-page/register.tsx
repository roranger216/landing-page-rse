import React, { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

function Register() {
  const router = useRouter();

  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3008/users', {
        firstname,
        middlename,
        lastname,
        email,
        password,
        gender,
      });

      console.log(response.data);
      alert("Created Successfully");
      router.push("../components/auth/signin");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registration_form w-full flex flex-col justify-center items-center my-10 z-50">
      <div className="Logo mb-8">
        <h1 className="font-bold text-3xl">
          RASI<span className="text-sky-600">NIX</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center">
        <div className="flex w-full flex-col justify-start items-center gap-y-5 max-sm:gap-y-9">
          <div className="flex flex-col w-3/4 justify-center gap-1">
            <label>First Name</label>
            <input
              type="text"
              id="firstname"
              name='firstName'
              className="w-full bg-white h-1/5 text-justify px-2 py-2 rounded-md border-2 border-blue-300 capitalize dark:text-black"
              placeholder="Firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-3/4 justify-center gap-1">
            <label>Middle Name</label>
            <input
              type="text"
              id="middlename"
              name='middleName'
              className="w-full bg-white h-1/3 text-justify px-2 py-2 rounded-md border-2 border-blue-300 capitalize dark:text-black"
              placeholder="Middle Name"
              value={middlename}
              onChange={(event) => setMiddlename(event.target.value)}
            />
          </div>
          <div className="flex flex-col w-3/4 justify-center gap-1">
            <label>Last Name</label>
            <input
              type="text"
              id="lastname"
              name='lastName'
              className="w-full bg-white h-1/3 text-justify px-2 py-2 rounded-md border-2 border-blue-300 capitalize dark:text-black"
              placeholder="Lastname"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-3/4 justify-center gap-1">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name='email'
              className="w-full bg-white h-1/3 text-justify px-2 py-2 rounded-md border-2 border-blue-300 dark:text-black"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col w-3/4 justify-center gap-1">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name='password'
              className="w-full bg-white h-1/3 text-justify px-2 py-2 rounded-md border-2 border-blue-300 dark:text-black"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex flex-col w-3/4 justify-center gap-1">
            <label>Gender</label>
            <select 
              name="gender"
              className="w-full bg-white h-1/3 text-justify px-2 py-2 rounded-md border-2 border-blue-300 dark:text-black"
              value={gender}
              onChange={(event) => setGender(event.target.value)}>
              <option value="">Select Here</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-4">
            <button
              type="submit"
              value="Register"
              className="w-1/3 bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded-md font-bold text-sm text-white hover:text-gray-200 shadow-lg"
            >
              Register
            </button>
            <p className="underline">or</p>
            <button
              type="submit"
              className="w-auto bg-gray-300 hover:bg-blue-400 py-2 px-4 rounded-md font-bold text-sm text-black hover:text-gray-200 shadow-lg flex flex-row justify-center max-sm:full"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
                alt="google"
                className="w-5 h-5 mx-1"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  )

}

export default Register;