import React, { Component } from 'react';
import { CustomButton, FormInput } from 'react/components';
import { authService } from 'service';
import './SignUp.styles.scss';

const INITIAL_STATE = {
  confirmPassword: '',
  displayName: '',
  email: '',
  password: '',
};

export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { confirmPassword, password } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await authService.register(this.state);
      await this.setState(INITIAL_STATE);
    } catch (error) {
      console.error('Failed to register new user', error);
    }
  }

  render() {
    const { confirmPassword, displayName, email, password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            onChange={this.handleChange}
            required
            type="text"
            value={displayName}
          />
          <FormInput
            label="Email"
            name="email"
            onChange={this.handleChange}
            required
            type="email"
            value={email}
          />
          <FormInput
            label="Password"
            name="password"
            onChange={this.handleChange}
            required
            type="password"
            value={password}
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            onChange={this.handleChange}
            required
            type="password"
            value={confirmPassword}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
};
