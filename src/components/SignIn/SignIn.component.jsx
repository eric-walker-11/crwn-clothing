import React, { Component } from 'react';
import { CustomButton, FormInput } from 'components';
import { authService } from 'service';
import './SignIn.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await authService.signIn(this.state);
      await this.setState({ email: '', password: '' });
    } catch (error) {
      console.error('Failed to sign in', error);
    }
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
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={() => authService.signInWithGoogle()}
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
