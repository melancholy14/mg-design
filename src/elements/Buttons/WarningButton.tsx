import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton, WHITE } from './styles';

const bgColor = '#826F35';
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function WarningButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

WarningButton.propTypes = propTypes;

WarningButton.defaultProps = defaultProps;

export default WarningButton;
