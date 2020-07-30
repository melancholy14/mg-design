import React from 'react';

import { propTypes, defaultProps, HeadingProps } from './types';

import { StyledHeading } from './styles';

function H4({ bold, children }: HeadingProps) {
  return (
    <StyledHeading as="h4" size="1.5rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

H4.propTypes = propTypes;

H4.defaultProps = defaultProps;

export default H4;
