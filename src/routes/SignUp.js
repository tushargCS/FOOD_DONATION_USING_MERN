import React from 'react'
import ContactForm from '../components/ContactForm';
import LoginInForm from '../components/LoginForm';
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm';

export const SignUp = () => {
  return (
    <div> 
        <Navbar/>
        <SignUpForm/>

    </div>
  )
}

export default SignUp;