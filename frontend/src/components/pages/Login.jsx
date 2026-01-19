"use client"
import React, { useContext, useState } from 'react'
import { ShopContext } from '../../store/ShopContext';
import axios from 'axios';
const Login = () => {
const [currentState, setCurrentState] = useState('Sign Up');
const { token, setToken,navigate,backendUrl } = useContext (ShopContext)

const [name,setName] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')

const onSubmitHandler = async (event) => {
    event.preventDefault ();
    try {
      if (currentState=== 'Sign Up'){
         const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
         console.log(response.data);
      }
      
    } catch (error) {
      
    }
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
    onChange={(e)=>setName(e.target.value)}
    value={name}
    type="text"
    id="name"
    name="name"
    placeholder="Name"
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
    required
  />}
 

  {/* Email Input */}
  <input
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    type="email"
    id="email"
    name="email"
    placeholder="Email"
    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
    required
  />

  {/* Password Input */}
  <input
    onChange={(e)=>setPassword(e.target.value)}
    value={password}
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

