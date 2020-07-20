import React from 'react';
import styled from 'styled-components';

import { ButtonProps, propTypes, defaultProps } from './types';
import { StyledButton } from './styles';

const bgColor = 'transparent';
const fontColor = '#073763';

const ExtendedStyledButton = styled(StyledButton)`
  color: ${fontColor};
  background: ${bgColor};
  border: 0px solid ${bgColor};

  &:hover {
    text-decoration: underline;
  }
`;

function LinkButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

LinkButton.propTypes = propTypes;

LinkButton.defaultProps = defaultProps;

export default LinkButton;
