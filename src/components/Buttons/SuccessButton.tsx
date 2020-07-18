import React from 'react';
import { darken, lighten } from 'polished';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = '#38761D';
const fontColor = '#FFFFFF';

const ExtendedStyledButton = makeExtendedStyledButton(
  bgColor,
  fontColor,
  darken(0.05, bgColor),
  lighten(0.6, bgColor)
);

function SuccessButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SuccessButton.propTypes = propTypes;

SuccessButton.defaultProps = defaultProps;

export default SuccessButton;
