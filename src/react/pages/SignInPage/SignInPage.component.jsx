import React from 'react';
import { SignIn, SignUp } from 'react/components';
import './SignInPage.styles.scss';

export default function SignInPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
