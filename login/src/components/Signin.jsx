import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';  // Import eye icons
import signupImg from '../assets/trees.jpg';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    console.log({
      name,
      email,
      password,
    });

    setTimeout(() => {
      setIsLoading(false);
      setError('');
    }, 2000);
  };

  return (
    <div className='relative w-full h-screen'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay z-0' src={signupImg} alt="Background" />

      <div className='flex justify-center items-center h-full relative z-10'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={handleSubmit} aria-labelledby="signupForm">
          <h2 id="signupForm" className='text-4xl font-bold text-center py-4'>Green Go</h2>
          <div className='flex justify-between py-8'>
            <button type="button" className='outline outline-offset-2 outline-2 shadow-lg hover:shadow-xl px-6 py-2 flex items-center' aria-label="Sign up with Facebook">
              <AiFillFacebook className='mr-2' /> Facebook
            </button>
            <button type="button" className='outline outline-offset-2 outline-2 shadow-lg hover:shadow-xl px-6 py-2 flex items-center' aria-label="Sign up with Google">
              <FcGoogle className='mr-2' /> Google
            </button>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className='border bg-gray-200 p-2'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-required="true"
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className='border bg-gray-200 p-2'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
            />
          </div>
          <div className='flex flex-col mb-4'>
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
          <div className='flex flex-col'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className='relative'>
              <input
                id="confirmPassword"
                className='border bg-gray-200 p-2 w-full'
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-required="true"
              />
              <button
                type="button"
                className='absolute inset-y-0 right-0 px-4 text-gray-600'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>
          {error && <p className='text-red-600'>{error}</p>}
          <button type="submit" className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white' disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <p className='text-center mt-8'>
            Already a member? <Link to="/" className='text-indigo-600 hover:underline'>Sign in now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
