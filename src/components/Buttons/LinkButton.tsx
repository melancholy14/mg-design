import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const mainColor = 'transparent';
const fontColor = 'darkgray';

const ExtendedStyledButton = makeExtendedStyledButton(mainColor, fontColor);

function LinkButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

LinkButton.propTypes = propTypes;

LinkButton.defaultProps = defaultProps;

export default LinkButton;
