import styled from 'styled-components';

import { StyledHeadingProps } from './types';

export const StyledHeading = styled.h6<
  StyledHeadingProps & {
    size: string;
  }
>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? 'bolder' : 'inherit')};
  margin-top: 0.67em;
  margin-bottom: 0.67em;
`;
