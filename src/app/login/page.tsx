'use client';

import { useState, FormEvent } from 'react';

export default function Login() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });

    // Handle the response from your API
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col text-black'>
      <input type="text" placeholder='Email' value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className='text-white' type="submit">Login</button>
    </form>
  );
}