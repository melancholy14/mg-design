import React from 'react';

import { COLORS, WHITE } from '../../common/colors';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = COLORS.warning;
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function WarningButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

WarningButton.propTypes = propTypes;

WarningButton.defaultProps = defaultProps;

export default WarningButton;
