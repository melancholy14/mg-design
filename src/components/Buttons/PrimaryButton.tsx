import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = '#27557E';
const fontColor = '#FFFFFF';

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function PrimaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

PrimaryButton.propTypes = propTypes;

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
