import React from 'react';
import '../../components/signIn/SignIn'
import "./SignIn-SignUp.scss"
import SignIn from '../../components/signIn/SignIn';
//import FormInput from '../../components/formInput/FormInput';
import SignUp from '../../components/signUp/SignUp';
import "./SignIn-SignUp.scss"

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
         SignIn
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default SignInSignUp;
