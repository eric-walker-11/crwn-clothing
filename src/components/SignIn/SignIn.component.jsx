import React, { Component } from 'react';
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
          <input
            name="email"
            onChange={this.handleChange}
            required
            type="email"
            value={email}
          />
          <label>Email</label>

          <input
            name="password"
            onChange={this.handleChange}
            required type="password"
            value={password}
          />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
