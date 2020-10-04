import styled, { css } from 'styled-components';

const backgroundColor = 'black';
const color = 'white';

const defaultStyles = css`
  background-color: ${backgroundColor};
  color: ${color};
  
   &:hover {
    background-color: ${color};
    border: 1px solid ${backgroundColor};
    color: ${backgroundColor};
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const invertedStyles = css`
  background-color: ${color};
  color: ${backgroundColor};

  &:hover {
    background-color: ${backgroundColor};
    border-color: ${color};
    color: ${color};
  }
`;

const getButtonStyles = ({ inverted, isGoogleSignIn }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }
  return inverted ? invertedStyles : defaultStyles;
};

export const CustomButtonContainer = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  width: auto;
  
  ${getButtonStyles}
`;
