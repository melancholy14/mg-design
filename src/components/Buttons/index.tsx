import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { StyledButton } from './styles';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import SuccessButton from './SuccessButton';
import DangerButton from './DangerButton';
import WarningButton from './WarningButton';
import LinkButton from './LinkButton';

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

Button.Primary = PrimaryButton;
Button.Secondary = SecondaryButton;
Button.Success = SuccessButton;
Button.Danger = DangerButton;
Button.Warning = WarningButton;
Button.Link = LinkButton;

export default Button;
