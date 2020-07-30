import React from 'react';

import { propTypes, defaultProps, HeadingProps } from './types';

import { StyledHeading } from './styles';

function H5({ bold, children }: HeadingProps) {
  return (
    <StyledHeading as="h5" size="1.25rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

H5.propTypes = propTypes;

H5.defaultProps = defaultProps;

export default H5;
