import styled from 'styled-components';
import { darken, lighten, invert } from 'polished';

import { StyledProps, SIZE } from './types';

export const StyledButton = styled.button<StyledProps>`
  background-color: ${(props) => (props.outline ? 'white' : '')};
  border-radius: ${(props) => {
    if (!props.rounded) {
      return '0.2rem';
    }

    switch (props.size) {
      case SIZE.medium:
        return '1.5rem';
      case SIZE.large:
        return '2rem';
      default:
        return '1rem';
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case SIZE.small:
        return '0.85rem';
      case SIZE.medium:
        return '1.25rem';
      case SIZE.large:
        return '1.5rem';
      default:
        return '1rem';
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case SIZE.small:
        return '0.3rem 0.6rem';
      case SIZE.medium:
        return '0.6rem 1.2rem';
      case SIZE.large:
        return '0.8rem 1.6rem';
      default:
        return '0.5rem 1rem';
    }
  }};

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
