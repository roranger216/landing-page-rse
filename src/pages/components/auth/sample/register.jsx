import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const samplereg = () => {
  const router = useRouter();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registeruser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3005/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    router.push("./login");
  }

  return (
    <>
      <div className="text-center text-xl">
        <div className="font-bold p-6">Registration Form</div>
        <div>
          <form onSubmit={registeruser}>
            <input className="border-2 p-1" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
            <br />
            <input className="border-2 p-1" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <br />
            <input className="border-2 p-1" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <br />
            <input className="bg-sky-400 px-4 py-2 mt-4 hover:bg-sky-600 rounded hover:text-white" type="submit" value="Register"></input>
          </form>
          <div className="text-center mt-4 hover:underline cursor-pointer text-lg">
            <Link href="login" className="">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default samplereg  