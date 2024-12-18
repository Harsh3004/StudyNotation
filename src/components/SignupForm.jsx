import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [user,setUser] = useState("student");
  const [isVisible,setVisible] = useState({
    createPassword: false,
    confirmPassword: false
  });
  const navigate = useNavigate();
  const loginCredential = useContext(loginContext);
  const isLoggedIn = loginCredential.isLoggedIn;
  const setLoggedIn = loginCredential.setLoggedIn;

  return (
    <div className="mt-8">
      <div className="flex bg-slate-800 max-w-max rounded-full p-1 gap-x-1">
        <button
        className={`${user === "student" ? "bg-slate-600 text-slate-50" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setUser("student")}>
          Student
        </button>

        <button
         className={`${user === "instructor" ? "bg-slate-600 text-slate-50" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setUser("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <div className='flex gap-x-4'>
          <div className='w-full'>
            <label htmlFor="firstName"
            className='text-slate-50 mb-1 text-[0.875rem] leading-[1.375rem]'
            >
              First Name
              <sup className='text-pink-200'>*</sup>
            </label>
            <input className="bg-slate-800 rounded-sm w-full px-[12px] py-[8px]" type="text" id='firstName' placeholder='Enter the first name'/>
          </div>
          <div className='w-full'>
            <label htmlFor="lastName"
            className='text-slate-50 mb-1 text-[0.875rem] leading-[1.375rem]'
            >
              Last Name
              <sup className='text-pink-200'>*</sup>
            </label>
            <input className="bg-slate-800 rounded-sm w-full px-[12px] py-[8px]" 
             type="text" id='lastName' placeholder='Enter the last name'/>
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor="email" className='text-slate-50 mb-1 text-[0.875rem] leading-[1.375rem]'>
            Email Address
            <sup className='text-pink-200'>*</sup>
          </label>
          <input type="email" placeholder='Enter email address'
          className="bg-slate-800 rounded-sm w-full px-[12px] py-[8px]"
          />
        </div>
        <div className="flex gap-x-4">
          <div className='w-full relative'>
            <label htmlFor="createPassword" className='text-slate-50 mb-1 text-[0.875rem] leading-[1.375rem]'>
              Create Password
              <sup className='text-pink-200'>*</sup>
            </label>
            <input type={isVisible ? "text" : "password"} placeholder='Enter Password' id='createPassword' className="bg-slate-800 rounded-sm w-full px-[12px] py-[8px]"/>
            <span className='absolute top-[38px] right-3 z-10 cursor-pointer'
            onClick={()=>handleClick("createPassword")}>
              {
                isVisible.createPassword ?
                (<AiOutlineEyeInvisible/>):
                (<AiOutlineEye />)
              }
            </span>
          </div>
          <div>
            <label htmlFor="confirmPassword" className='text-slate-50 mb-1 text-[0.875rem] leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></label>
            <input type={isVisible ? "text" : "password"} placeholder='Confirm Password' id='confirmPassword' className="bg-slate-800 rounded-sm w-full px-[12px] py-[8px]"/>
            <span className='absolute top-[38px] right-3 z-10 cursor-pointer'
            onClick={()=>handleClick("confirmPassword")}>
              {
                isVisible.confirmPassword ?
                (<AiOutlineEyeInvisible/>):
                (<AiOutlineEye />)
              }
            </span>
          </div>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm