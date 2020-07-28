import React from 'react';

import EnormousHeading from './EnormousHeading';
import { defaultProps, propTypes, HeadingProps } from './types';
import { StyledHeading } from './styles';

function Heading({ bold, children }: HeadingProps) {
  return (
    <StyledHeading size="0.75rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

Heading.Enormous = EnormousHeading;

Heading.propTypes = propTypes;

Heading.defaultProps = defaultProps;

export default Heading;
