import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton, WHITE } from './styles';

const bgColor = '#38761D';
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function SuccessButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SuccessButton.propTypes = propTypes;

SuccessButton.defaultProps = defaultProps;

export default SuccessButton;
