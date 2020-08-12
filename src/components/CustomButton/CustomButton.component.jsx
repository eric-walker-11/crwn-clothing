import React from 'react';
import './CustomButton.styles.scss'

export default function CustomButton({
  children,
  isGoogleSignIn,
  type = 'button',
  ...otherProps
}) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
