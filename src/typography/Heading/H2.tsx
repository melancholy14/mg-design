import React from 'react';

import { propTypes, defaultProps, HeadingProps } from './types';

import { StyledHeading } from './styles';

function H2({ bold, children }: HeadingProps) {
  return (
    <StyledHeading as="h2" size="2.5rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

H2.propTypes = propTypes;

H2.defaultProps = defaultProps;

export default H2;
