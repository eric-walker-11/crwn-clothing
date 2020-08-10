import React, { Component } from 'react';
import { signInWithGoogle } from 'api/firebase';
import { CustomButton, FormInput } from 'components';
import './SignIn.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="email"
            name="email"
            required
            type="email"
            value={email}
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            required
            type="password"
            value={password}
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
