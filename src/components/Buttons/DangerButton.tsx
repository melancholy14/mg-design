import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton, WHITE } from './styles';

const bgColor = '#990000';
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function DangerButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

DangerButton.propTypes = propTypes;

DangerButton.defaultProps = defaultProps;

export default DangerButton;
