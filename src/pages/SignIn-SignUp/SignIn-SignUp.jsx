import React from 'react';
import '../../components/signIn/SignIn'
import "./SignIn-SignUp.scss"
import SignIn from '../../components/signIn/SignIn';
import FormInput from '../../components/formInput/FormInput';

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
        SignIn
        <SignIn/>
        <FormInput/>
    </div>
  )
}

export default SignInSignUp;
