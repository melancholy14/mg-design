import React from 'react';

import { COLORS, WHITE } from '../../common/colors';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = COLORS.danger;
const fontColor = WHITE;

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function DangerButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

DangerButton.propTypes = propTypes;

DangerButton.defaultProps = defaultProps;

export default DangerButton;
