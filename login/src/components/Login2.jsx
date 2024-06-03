import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import loginImg from '../assets/trees.jpg';

export default function Login2() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    setIsLoading(true);

    // Here you can handle the form submission logic
    // For example, you can send the form data to an API
    console.log({
     email,
      password,
      rememberMe,
    });

    setTimeout(() => {
      setIsLoading(false);
      setError('');
    }, 2000); // Simulating an API call
  };

  return (
    <div className='relative w-full h-screen'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay z-0' src={loginImg} alt="Background" />

      <div className='flex justify-center items-center h-full relative z-10'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit} aria-labelledby="loginForm">
          <h2 id="loginForm" className='text-4xl font-bold text-center py-4'>Green Go</h2>
          <div className='flex justify-between py-8'>
            <button type="button" className='outline outline-offset-2 outline-2 shadow-lg hover:shadow-xl px-6 py-2 flex items-center' aria-label="Login with Facebook">
              <AiFillFacebook className='mr-2' /> Facebook
            </button>
            <button type="button" className='outline outline-offset-2 outline-2 shadow-lg hover:shadow-xl px-6 py-2 flex items-center' aria-label="Login with Google">
              <FcGoogle className='mr-2' /> Google
            </button>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="emil">Email</label>
            <input
              id="email"
              className='border bg-gray-200 p-2'
              type="text"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              aria-required="true"
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className='border bg-gray-200 p-2'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
            />
          </div>
          {error && <p className='text-red-600'>{error}</p>}
          <button type="submit" className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white' disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <label className='flex items-center mt-2'>
            <input
              className='mr-2'
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            /> 
            Remember Me
          </label>
          <p className='text-center mt-8'>
            Not a member? <Link to="/Signin" className='text-indigo-600 hover:underline'>Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
