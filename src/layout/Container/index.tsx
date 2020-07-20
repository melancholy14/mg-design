import React from 'react';

import { propTypes, defaultProps, ContainerProps } from './types';
import { StyledContainer } from './styles';

function Container({ full, children }: ContainerProps) {
  return <StyledContainer full={full}>{children}</StyledContainer>;
}

Container.propTypes = propTypes;

Container.defaultProps = defaultProps;

export default Container;
