import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const mainColor = 'green';
const fontColor = 'white';

const ExtendedStyledButton = makeExtendedStyledButton(mainColor, fontColor);

function SuccessButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SuccessButton.propTypes = propTypes;

SuccessButton.defaultProps = defaultProps;

export default SuccessButton;
