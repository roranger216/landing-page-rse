import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3008/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const { token } = await response.json();
      alert('You are in!');
      console.log({ token })
      // Save the token to local storage or cookie and redirect to the home page
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>
        Email:
        <input className="" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input className="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}