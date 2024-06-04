import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginImg from '../assets/trees.jpg';

export default function Login2() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    setIsLoading(true);

    console.log({
      email,
      password,
      rememberMe,
    });

    setTimeout(() => {
      setIsLoading(false);
      setError('');
    }, 2000);
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
              <FaGoogle className='mr-2' /> Google
            </button>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="email">Email</label>
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
            <div className='relative'>
              <input
                id="password"
                className='border bg-gray-200 p-2 w-full'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-required="true"
              />
              <button
                type="button"
                className='absolute inset-y-0 right-0 px-4 text-gray-600'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>
          {error && <p className='text-red-600'>{error}</p>}
          <button type="submit" className='w-full py-3 mt-8 bg-emerald-500 hover:bg-emerald-800 shadow-lg shadow-green-500/50 transition-colors text-white' disabled={isLoading}>
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
            Not a member? <Link to="/Signin" className='text-green-600 hover:underline'>Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
