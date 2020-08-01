import React from 'react';

import { COLORS, WHITE } from '../../common/colors';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = COLORS.secondary;
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function SecondaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SecondaryButton.propTypes = propTypes;

SecondaryButton.defaultProps = defaultProps;

export default SecondaryButton;
