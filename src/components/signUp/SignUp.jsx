import React, { Component } from 'react';
import FormInput from "../formInput/FormInput";
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/Firebase.utils';

class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
            createdAt:new Date()
        }
    }
        handleSubmit = async (e)=>{
                    e.preventDefault()
                    const {displayName,email,password,confirmPassword } = this.state
                    if (password !== confirmPassword) {
                        alert(" Passwords don't match!")
                        return
                    }

                    try {
                        const {user} = await auth.createUserWithEmailAndPassword(email,password)

                        await createUserProfileDocument(user,{ displayName})

                        this.setState({
                            displayName:'',
                            email:'',
                            password:'',
                            confirmPassword:''
                    })

                    } catch (error) {
                        console.log(error);
                    }
        }
handleChange = (e) => {
    const { value, name} = e.target;

    this.setState({
        [name]:value
    })
}

    render() {

        const {displayName,email,password,confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                    type='text'
                    value={displayName}
                     name="displayName"
                    label='Display Name'
                    onChange={this.handleChange}
                    required
                    />
                         <FormInput 
                    type='email'
                    value={email}
                     name="email"
                    label='Email'
                    onChange={this.handleChange}
                    required
                    />
                         <FormInput 
                    type='password'
                    value={password}
                     name="password"
                    label="Password"
                    onChange={this.handleChange}
                    required
                    />
                         <FormInput 
                    type='password'
                    value={confirmPassword}
                     name="confirmPassword"
                    label='Confirm Password'
                    onChange={this.handleChange}
                    required
                    />
                    <CustomButton type="submit">Sign Up </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
