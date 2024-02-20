'use client';

import { useState, FormEvent } from 'react';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // Handle the response from your API
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}