import React from 'react';

import { COLORS, WHITE } from 'common/colors';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = COLORS.PRIMARY;
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function PrimaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

PrimaryButton.propTypes = propTypes;

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
