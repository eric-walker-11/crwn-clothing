import React from 'react';
import { SignIn, SignUp } from 'components';
import './SignInPage.styles.scss';

export default function SignInPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
