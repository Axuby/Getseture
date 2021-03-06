import React ,{useState,useEffect} from 'react';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';

import './signIn.scss';

const SignIn = ()=>{
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // }

    const [details, setDetails] = useState({
      email:"",
      password:""
    })

    const { email, password } = details;

      useEffect(() => {
        setDetails({email,password})
      }, [details])


  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setDetails({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

 const  handleChange = event => {
    const { value, name } = event.target;

    setDetails({ ...details,[name]: value });
  };


    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />

          <FormInput
          type=""
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


export default SignIn;
