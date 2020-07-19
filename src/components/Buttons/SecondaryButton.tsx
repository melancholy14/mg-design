import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton, WHITE } from './styles';

const bgColor = '#565E64';
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function SecondaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SecondaryButton.propTypes = propTypes;

SecondaryButton.defaultProps = defaultProps;

export default SecondaryButton;
