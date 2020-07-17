import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const mainColor = 'red';
const fontColor = 'white';

const ExtendedStyledButton = makeExtendedStyledButton(mainColor, fontColor);

function DangerButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

DangerButton.propTypes = propTypes;

DangerButton.defaultProps = defaultProps;

export default DangerButton;
