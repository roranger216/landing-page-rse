import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const samplereg = () => {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event: any) {
        
        event.preventDefault()

        const response = await fetch('http://localhost:3005/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if(data.user) {
            router.push("./dashboard");
        } else {
            alert('Incorrect email or password')
        }
    }

    return (
        <>
            <div className="text-center text-xl">
                <div className="font-bold p-6">Login Form</div>
                <div>
                    <form onSubmit={loginUser}>
                        <input className="border-2 p-1" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        <br />
                        <input className="border-2 p-1" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <br />
                        <input className="bg-sky-400 px-4 py-2 mt-4 hover:bg-sky-600 rounded hover:text-white hover:transition-all" type="submit" value="Login"></input>
                    </form>
                    <div className="text-center mt-4 hover:underline cursor-pointer text-lg">
                        <Link href="register" className="">Register Here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default samplereg