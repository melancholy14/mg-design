import React from 'react';

import { defaultProps, propTypes, HeadingProps } from './types';
import { StyledHeading } from './styles';

import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';

function Heading({ bold, children }: HeadingProps) {
  return (
    <StyledHeading size="1rem" bold={bold}>
      {children}
    </StyledHeading>
  );
}

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;

Heading.propTypes = propTypes;

Heading.defaultProps = defaultProps;

export default Heading;
