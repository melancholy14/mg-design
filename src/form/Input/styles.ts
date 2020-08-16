import styled from 'styled-components';
import { lighten } from 'polished';

import { SIZE } from '../../common/sizes';
import { makeFontSizeBySize, makeColorByStyle } from '../../common/utils';

import { StyledInputProps, WrapperProps } from './types';

export const StyledInput = styled.input<StyledInputProps>`
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
    color: ${(props) => lighten(0.75, makeColorByStyle(props.inputStyle))};
  }

  &:disabled {
    background-color: ${(props) => {
      return lighten(0.5, makeColorByStyle(props.inputStyle));
    }};
  }

  &:focus {
    box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem
      ${(props) => makeColorByStyle(props.inputStyle)};

    outline: none;
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
