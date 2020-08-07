import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { WHITE } from '../../common/colors';
import { SIZE } from '../../common/sizes';
import { makeFontSizeBySize, makePaddingBySize } from '../../common/utils';

import { StyledProps } from './types';

export const StyledButton = styled.button<StyledProps>`
  width: ${(props) => (props.full ? '100%' : 'initial')};
  background-color: ${(props) => (props.outline ? WHITE : '')};

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

  font-size: ${(props) => makeFontSizeBySize(props.size)};

  font-weight: ${(props) => (props.bold ? 'bolder' : 'initial')};

  padding: ${(props) => makePaddingBySize(props.size)};

  &:disabled {
    opacity: 0.5;
  }
`;

export const makeExtendedStyledButton = (
  bgColor: string,
  fontColor: string,
  darkenColor = darken(0.05, bgColor),
  lightenColor = lighten(0.6, bgColor)
) => {
  const basicStyles = (light?: boolean, outline?: boolean) => `
    border: 1px solid ${light ? lightenColor : bgColor};

    background-color: ${outline ? WHITE : light ? lightenColor : bgColor};

    color: ${outline || light ? bgColor : fontColor};
  `;

  return styled(StyledButton)`
    ${(props) => basicStyles(props.light, props.outline)}

    &:hover {
      border-color: ${darkenColor};

      background-color: ${(props) => {
        if (props.outline) {
          return fontColor;
        } else if (props.light) {
          return lighten(0.4, darkenColor);
        }
        return darkenColor;
      }};

      color: ${(props) =>
        props.outline || props.light ? darkenColor : fontColor};
    }

    &:disabled {
      ${(props) => basicStyles(props.light, props.outline)}
    }
  `;
};
