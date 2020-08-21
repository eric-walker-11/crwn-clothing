import React from 'react';
import './CustomButton.styles.scss'

const getClassNames = ({ inverted, isGoogleSignIn }) => `${
  inverted ? 'inverted' : ''
} ${
  isGoogleSignIn ? 'google-sign-in' : ''
} custom-button`

export default function CustomButton({
  children,
  inverted = false,
  isGoogleSignIn = false,
  type = 'button',
  ...otherProps
}) {
  return (
    <button
      className={getClassNames({ inverted, isGoogleSignIn })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
