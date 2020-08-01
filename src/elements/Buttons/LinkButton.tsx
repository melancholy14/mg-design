import React from 'react';
import styled from 'styled-components';

import { TRANSPARENT, INDIGO } from '../../common/colors';

import { ButtonProps, propTypes, defaultProps } from './types';
import { StyledButton } from './styles';

const bgColor = TRANSPARENT;
const fontColor = INDIGO;

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
