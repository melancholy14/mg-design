import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const mainColor = 'yellow';
const fontColor = 'white';

const ExtendedStyledButton = makeExtendedStyledButton(mainColor, fontColor);

function WarningButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

WarningButton.propTypes = propTypes;

WarningButton.defaultProps = defaultProps;

export default WarningButton;
