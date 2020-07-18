import React from 'react';
import { darken, lighten } from 'polished';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = '#826F35';
const fontColor = '#FFFFFF';

const ExtendedStyledButton = makeExtendedStyledButton(
  bgColor,
  fontColor,
  darken(0.05, bgColor),
  lighten(0.6, bgColor)
);

function WarningButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

WarningButton.propTypes = propTypes;

WarningButton.defaultProps = defaultProps;

export default WarningButton;
