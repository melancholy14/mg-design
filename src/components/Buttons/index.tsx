import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { StyledButton } from './styles';

import PrimaryButton from './PrimaryButton';

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

Button.Primary = PrimaryButton;

export default Button;
