import styled from 'styled-components';
import { StyledProps } from './types';

export const StyledContainer = styled.div<StyledProps>`
  ${(props) => {
    if (props.full) {
      return 'width: 100%';
    }

    return `
      margin: auto;

      max-width: 20rem;

      @media screen and (min-width: 30em) {
        max-width: 30rem;
      }

      @media screen and (min-width: 60em) {
        max-width: 60rem;
      }

      @media screen and (min-width: 72em) {
        max-width: 72rem;
      }

      @media screen and (min-width: 84em) {
        max-width: 84rem;
      }
    `;
  }};
`;
