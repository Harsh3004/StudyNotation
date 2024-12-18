import React from 'react'
import frameImg from '../assets/frame.png'
import signup from '../assets/signup.png'
import Formtemplate from '../components/Formtemplate'

const Signup = () => {
  return (
    <div>
      <Formtemplate 
      title= "Join the millions learning to code with StudyNotation for free"
      desc1= "Build skills for today,tomorrow, and beyond. "
      desc2= "Education to future-proof your career"
      formType = "signup"
      frame= {frameImg}
      image= {signup}
      />
    </div>
  )
}

export default Signup