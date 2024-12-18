import React from 'react'
import LoginForm from "./LoginForm.jsx"
import SignupForm from "./SignupForm.jsx"

const Formtemplate = (props) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between text-slate-100'>
        <div className='w-11/12 max-w-[450px] flex flex-col'>
            <h1 className='text-slate-50 font-semibold text-[1.875rem] leading-[2.375rem]'>{props.title}</h1>
            <p className='text-[1.125rem] my-2 leading-[1.625rem]'>
              <span className='text-slate-400'>{props.desc1}</span>
              <span className='text-slate-400'>{props.desc2}</span>
            </p>
            {props.formType === "login" ? <LoginForm/> : <SignupForm />}
            <div className='flex w-full items-center gap-x-2 my-4'>
              <div className='h-[1px] bg-slate-700 w-full'></div>
              <p className='uppercase text-slate-700 w-fit font-medium leading-[1.375rem]'>or</p>
              <div className='h-[1px] bg-slate-700 w-full'></div>
            </div>
            <button className='flex rounded-md items-center justify-center border bg-slate-900 border-slate-900 font-medium text-slate-100 px-[12px] py-[8px] gap-x-2 mt-6 shadow'
            >
                {/* <FcGoogle /> */}
                <p>Sign in with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={props.frame} alt='frame' width={558} height={504} loading='lazy'/>
            <img src={props.image} alt='student image' width={558} height={504} loading='lazy'
            className='absolute -top-4 right-4'
            />
        </div>
    </div>
  )
}

export default Formtemplate