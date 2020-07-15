import styled from 'styled-components';
import { darken, lighten, invert } from 'polished';

import { StyledProps } from './types';

export const StyledButton = styled.button<StyledProps>`
  background-color: ${(props) => (props.outline ? 'white' : '')};
  border-radius: ${(props) => (props.rounded ? '1rem' : '0.2rem')};
  padding: 0.5rem 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;

export const makeExtendedStyledButton = (
  mainColor: string,
  fontColor: string
) => styled(StyledButton)`
  border: 1px solid ${mainColor};

  background-color: ${(props) =>
    props.outline
      ? fontColor
      : props.light
      ? lighten(0.3, mainColor)
      : mainColor};
  color: ${(props) =>
    props.outline ? mainColor : props.light ? invert(fontColor) : fontColor};

  &:hover {
    border-color: ${darken(0.2, mainColor)};
    background-color: ${(props) =>
      props.outline ? fontColor : darken(0.2, mainColor)};
    color: ${(props) => (props.outline ? darken(0.2, mainColor) : fontColor)};
  }
`;
