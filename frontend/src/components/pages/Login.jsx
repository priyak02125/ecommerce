"use client"
import React, { useState } from 'react'
const Login = () => {
const [currentState, setCurrentState] = useState('Sign Up');

const onSubmitHandler = async (event) => {
    event.preventDefault ();
}

  return (
<form  onSubmit={onSubmitHandler} className="max-w-md mx-auto mt-10 p-4 flex flex-col gap-4">
  {/* Heading */}
  <div className="inline-flex items-center gap-2 mt-8 justify-center">
    <p className="prata-regular text-3xl">{currentState}</p>
    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
  </div>

  {/* Name Input */}
  {currentState === 'Login' ? '' :  
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Name"
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
    required
  />}
 

  {/* Email Input */}
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Email"
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
    required
  />

  {/* Password Input */}
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Password"
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
    required
  />
  <div className='w-full flex justify-between text-sm'>
   <p className='cursor-pointer'>Forgot your Password ?</p>
   {
    currentState === 'Login'
    ?<p onClick= {()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create accouunt</p>
    :<p onClick= {()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
   }
  </div>
  <button className='w-1/2 mx-auto bg-black text-white font-light px-5 py-2 text-center rounded-sm'>
  {currentState === 'Login' ? 'Sign' : 'Sign Up'}
</button>
</form>
  )
}

export default Login

