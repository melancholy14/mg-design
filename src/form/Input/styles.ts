import styled from 'styled-components';
import { lighten } from 'polished';

import { SIZE } from '../../common/sizes';
import { makeFontSizeBySize, makeColorByStyle } from '../../common/utils';

import { StyledInputProps, WrapperProps } from './types';

export const StyledInput = styled.div<StyledInputProps & { focused: boolean }>`
  width: ${(props) => (props.full ? '100%' : 'auto')};

  border: 1px solid ${(props) => makeColorByStyle(props.inputStyle)};

  border-radius: ${(props) => {
    if (!props.rounded) {
      return '0.2rem';
    }

    switch (props.extent) {
      case SIZE.medium:
        return '1.5rem';
      case SIZE.large:
        return '2rem';
      default:
        return '1rem';
    }
  }};

  display: flex;
  align-items: center;

  box-shadow: ${(props) =>
    props.focused
      ? `0.1rem 0.1rem 0.2rem 0.1rem ${makeColorByStyle(props.inputStyle)}`
      : ''};

  div {
    text-align: center;

    ${(props) => {
      switch (props.icon) {
        case 'left':
          return `border-right: 1px solid ${makeColorByStyle(
            props.inputStyle
          )}`;
        case 'right':
          return `border-left: 1px solid ${makeColorByStyle(props.inputStyle)}`;
        default:
          return '';
      }
    }};

    padding: ${(props) => {
      switch (props.extent) {
        case SIZE.small:
          return '0.3rem';
        case SIZE.medium:
          return '0.6rem';
        case SIZE.large:
          return '0.8rem';
        default:
          return '0.5rem';
      }
    }};
  }

  input {
    border: 0;

    border-radius: ${(props) => {
      if (!props.rounded) {
        return '0.2rem';
      }

      switch (props.extent) {
        case SIZE.medium:
          return '1.5rem';
        case SIZE.large:
          return '2rem';
        default:
          return '1rem';
      }
    }};

    font-size: ${(props) => makeFontSizeBySize(props.extent)};

    font-weight: ${(props) => (props.bold ? 'bolder' : 'initial')};

    padding: ${(props) => {
      switch (props.extent) {
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

    &:placeholder {
      color: ${(props) => lighten(0.6, makeColorByStyle(props.inputStyle))};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Wrapper = styled.label<WrapperProps>`
  width: fit-content;

  display: flex;
  align-items: center;

  flex-direction: ${(props) => {
    switch (props.labelLocation) {
      case 'left':
        return 'row';
      case 'up':
        return 'column';
      default:
        return '';
    }
  }};

  & > span {
    width: 100%;
    font-size: smaller;

    ${(props) => {
      switch (props.labelLocation) {
        case 'left':
          return 'margin-right: 0.5rem';
        case 'up':
          return 'margin-bottom: 0.5rem';
        default:
          return '';
      }
    }};
  }
`;
