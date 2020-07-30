import React from 'react';

import { propTypes, defaultProps, HeadingProps } from './types';

import { StyledHeading } from './styles';

function H1({ bold, children }: HeadingProps) {
  return (
    <StyledHeading as="h1" size="3rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

H1.propTypes = propTypes;

H1.defaultProps = defaultProps;

export default H1;
