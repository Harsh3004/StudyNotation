import React from 'react'
import Formtemplate from '../components/Formtemplate'
import frameImg from '../assets/frame.png'
import login from '../assets/login.png'

const Login = () => {
  
  return (
    <div>
      <Formtemplate 
      title="Welcome Back"
      desc1= "Build skills for today, tomorrow, and beyond. "
      desc2= "Education to future-proof your career"
      formType= "login"
      image={login}
      />
    </div>
  )
}

export default Login