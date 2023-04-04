import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const samplereg = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users', {
        name,
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="text-center text-xl">
        <div className="font-bold p-6">Registration Form</div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="border-2 p-1"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <br />
            <input
              className="border-2 p-1"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              className="border-2 p-1"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <input
              className="bg-green-400 px-4 py-2 mt-4 hover:bg-sky-600 rounded hover:text-white"
              type="submit"
              value="Register"
            ></input>
          </form>
          {/* <div className="text-center mt-4 hover:underline cursor-pointer text-lg">
            <Link href="login" className="">
              Login
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default samplereg;