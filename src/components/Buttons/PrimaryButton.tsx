import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton, WHITE } from './styles';

const bgColor = '#27557E';
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function PrimaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

PrimaryButton.propTypes = propTypes;

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
