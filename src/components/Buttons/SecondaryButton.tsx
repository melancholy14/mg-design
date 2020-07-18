import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const bgColor = '#565E64';
const fontColor = '#FFFFFF';

const ExtendedStyledButton = makeExtendedStyledButton(bgColor, fontColor);

function SecondaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SecondaryButton.propTypes = propTypes;

SecondaryButton.defaultProps = defaultProps;

export default SecondaryButton;
