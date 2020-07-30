import React from 'react';

import { propTypes, defaultProps, HeadingProps } from './types';

import { StyledHeading } from './styles';

function H3({ bold, children }: HeadingProps) {
  return (
    <StyledHeading as="h3" size="2rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

H3.propTypes = propTypes;

H3.defaultProps = defaultProps;

export default H3;
