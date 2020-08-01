import React, { Component } from 'react';
import "./signIn.scss"
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/Firebase.utils';

class SignIn extends Component {
    constructor(props){
            super(props)
            this.state = {
                email:"",
                password:""
            }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({email:"",password:""})
       
    }

    handleChange = (e) =>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>SignIn with your email and password</span>
 
                <form onSubmit={this.onSubmit}>
                    <FormInput label="Email" handleChange={this.handleChange} type="email" value={this.state.email}  name="email" placeholder="email" id="" required/>
                    <FormInput label="Password" handleChange={this.handleChange} type="password" value={this.state.password} name="password" id="" required/>
                   <div className="button">
                        <CustomButton type="submit" >Sign In</CustomButton>
                            <CustomButton isGoogleSignIn 
                            onClick={signInWithGoogle}>
                                {''} 
                        Sign In With Google{' '}</CustomButton>
                   </div>
                </form>
               
            </div>
        )
    }
}
 
export default SignIn
