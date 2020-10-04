import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles'

export default function CustomButton({
  children,
  inverted = false,
  isGoogleSignIn = false,
  type = 'button',
  ...otherProps
}) {
  return (
    <CustomButtonContainer
      inverted={inverted}
      isGoogleSignIn={isGoogleSignIn}
      type={type}
      {...otherProps}
    >
      {children}
    </CustomButtonContainer>
  );
};
