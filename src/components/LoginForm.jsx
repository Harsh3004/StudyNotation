import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { loginContext } from '../App.jsx'

const LoginForm = () => {
  const [isVisible,setVisible] = useState(false);
  const loginCredential = useContext(loginContext);
  const isLoggedIn = loginCredential.isLoggedIn;
  const setLoggedIn = loginCredential.setLoggedIn;
  const navigate = useNavigate();

  function submitHandler(data){
    // toast.success("Login Successfully")
    console.log(data);
    setLoggedIn(true);
    navigate('dashboard')
  }

  return (
    <div>
      <form className='flex flex-col w-full gap-y-4 mt-6'
      onSubmit={handleSubmit(submitHandler)}
      >
        <div className='w-full'>
          <label htmlFor="email" className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
            Email Address
            <sup className='text-pink-200'>*</sup>
          </label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          className='bg-slate-800 rounded-sm w-full p-[12px] text-slate-50'
          placeholder='Enter your email address'
          />
        </div>

        <div className='w-full relative'>
          <label htmlFor="password" className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
            Password
            <sup className='text-pink-200'>*</sup>
          </label>

          <input type={isVisible ? "text" : "password"}name="password" id="password" placeholder='Enter Password' className='bg-slate-800 rounded-sm w-full p-[12px] text-slate-50'/>

          {/* <span onClick={()=> setVisible(!isVisible)}
          className='absolute right-3 top-[38px] cursor-pointer'
          >
            {
              isVisible ? 
              (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> ):
              (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
            }
          </span> */}

          <NavLink to='#'>
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forget Password</p>
          </NavLink>
        </div>

        <button className='bg-yellow-300 py-[8px] px-[12px] rounded-sm mt-6 font-semibold text-slate-900'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm