import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const mainColor = 'royalblue';
const fontColor = 'white';

const ExtendedStyledButton = makeExtendedStyledButton(mainColor, fontColor);

function PrimaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

PrimaryButton.propTypes = propTypes;

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
