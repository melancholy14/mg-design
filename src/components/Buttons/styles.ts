import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { StyledProps, SIZE } from './types';

export const StyledButton = styled.button<StyledProps>`
  width: ${(props) => (props.full ? '100%' : 'initial')};
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

  font-weight: ${(props) => (props.bold ? 'bolder' : 'initial')};

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
) => {
  const lightenColor = lighten(0.3, mainColor);
  const lightenOutlineColor = lighten(0.1, mainColor);
  const darkenColor = darken(0.2, mainColor);

  return styled(StyledButton)`
    border: 1px solid ${(props) => (props.light ? lightenColor : mainColor)};

    background-color: ${(props) =>
      props.outline ? fontColor : props.light ? lightenColor : mainColor};
    color: ${(props) => {
      if (props.outline && props.light) {
        return lightenOutlineColor;
      } else if (props.outline || props.light) {
        return mainColor;
      }

      return fontColor;
    }};

    &:hover {
      border-color: ${darkenColor};
      background-color: ${(props) => (props.outline ? fontColor : darkenColor)};
      color: ${(props) => (props.outline ? darkenColor : fontColor)};
    }
  `;
};
