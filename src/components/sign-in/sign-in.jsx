import React, { Component } from 'react';
import './sign-in.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};


	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handleSubmit}>

					<FormInput 
						name='email' 
						type='email' 
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required />

					<FormInput 
						name='password' 
						type='password' 
						value={this.state.password} 
						handleChange={this.handleChange}
						label='password'
						required />
					

					<CustomButton type='submit' value='Submit form'>Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} >Sign in with Google</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;