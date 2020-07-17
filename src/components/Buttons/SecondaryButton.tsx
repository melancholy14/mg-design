import React from 'react';

import { ButtonProps, propTypes, defaultProps } from './types';
import { makeExtendedStyledButton } from './styles';

const mainColor = '#6c757d'; // 'darkslategray';
const fontColor = 'white';

const ExtendedStyledButton = makeExtendedStyledButton(mainColor, fontColor);

function SecondaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

SecondaryButton.propTypes = propTypes;

SecondaryButton.defaultProps = defaultProps;

export default SecondaryButton;
