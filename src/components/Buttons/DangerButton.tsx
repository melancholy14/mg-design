import React from 'react';
import { darken, lighten } from 'polished';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = '#990000';
const fontColor = '#FFFFFF';

const ExtendedStyledButton = makeExtendedStyledButton(
  bgColor,
  fontColor,
  darken(0.05, bgColor),
  lighten(0.6, bgColor)
);

function DangerButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

DangerButton.propTypes = propTypes;

DangerButton.defaultProps = defaultProps;

export default DangerButton;
