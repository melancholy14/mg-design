import React from 'react';

import { COLORS, WHITE } from 'common/colors';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = COLORS.SUCCESS;
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function SuccessButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SuccessButton.propTypes = propTypes;

SuccessButton.defaultProps = defaultProps;

export default SuccessButton;
