import React from 'react';

import { propTypes, defaultProps, HeadingProps } from './types';

import { StyledHeading } from './styles';

function EnormousHeading({ bold, children }: HeadingProps) {
  return (
    <StyledHeading as="h1" size="3rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

EnormousHeading.propTypes = propTypes;

EnormousHeading.defaultProps = defaultProps;

export default EnormousHeading;
