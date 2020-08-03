import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { lighten } from 'polished';

import { COLORS, BLACK, GRAY } from '../../common/colors';
import { SIZE } from '../../common/sizes';
import { STYLES } from '../../common/styles';

type StyledInputProps = {
  /** set the border color depending on the type */
  inputStyle?: keyof typeof STYLES;
  /** makes the input look rounded */
  rounded?: boolean;
  /** adjust the size of the input, used `extent` to avoid conflicting to the default `size` tag */
  extent?: keyof typeof SIZE;
  /** makes the input have a full width */
  full?: boolean;
  /** makes the text bolder */
  bold?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => (props.full ? '100%' : 'auto')};

  border: 1px solid
    ${(props) => {
      switch (props.inputStyle) {
        case STYLES.primary:
          return COLORS.primary;
        case STYLES.secondary:
          return COLORS.secondary;
        case STYLES.success:
          return COLORS.success;
        case STYLES.danger:
          return COLORS.danger;
        case STYLES.warning:
          return COLORS.warning;
        default:
          return 'currentColor';
      }
    }};

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

  font-size: ${(props) => {
    switch (props.extent) {
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
    color: ${lighten(0.5, BLACK)};
  }

  &:disabled {
    background-color: ${(props) => {
      const color = props.inputStyle ? COLORS[props.inputStyle] : BLACK;

      return lighten(0.5, color || GRAY);
    }};
  }

  &:focus {
    box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem
      ${(props) => {
        switch (props.inputStyle) {
          case STYLES.primary:
            return COLORS.primary;
          case STYLES.secondary:
            return COLORS.secondary;
          case STYLES.success:
            return COLORS.success;
          case STYLES.danger:
            return COLORS.danger;
          case STYLES.warning:
            return COLORS.warning;
          default:
            return 'currentColor';
        }
      }};

    outline: none;
  }
`;

type WrapperProps = {
  /** sets the location of the label */
  labelLocation?: 'up' | 'left' | 'right' | 'down';
};

const Wrapper = styled.label<WrapperProps>`
  width: fit-content;

  display: flex;
  align-items: center;

  flex-direction: ${(props) => {
    switch (props.labelLocation) {
      case 'left':
        return 'row';
      case 'up':
        return 'column';
      case 'right':
        return 'row-reverse';
      case 'down':
        return 'column-reverse';
      default:
        return '';
    }
  }};

  & > span {
    width: 100%;

    ${(props) => {
      switch (props.labelLocation) {
        case 'left':
          return 'margin-right: 0.5rem';
        case 'up':
          return 'margin-bottom: 0.5rem';
        case 'down':
          return 'margin-top: 0.5rem';
        case 'right':
          return 'margin-left: 0.5rem';
        default:
          return '';
      }
    }};
  }
`;

type InputProps = StyledInputProps &
  WrapperProps & {
    /** makes the button inactive */
    disabled?: boolean;
    value?: string | number;
    placeholder?: string;
    id?: string;
    /** the label text for the input tag */
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

function Input({ id, label, labelLocation, ...props }: InputProps) {
  return (
    <Wrapper htmlFor={id} labelLocation={labelLocation}>
      <span>{label}</span>
      <StyledInput {...props} id={id} />
    </Wrapper>
  );
}

Input.propTypes = {
  inputStyle: PropTypes.oneOf(Object.values(STYLES)),
  rounded: PropTypes.bool,
  extent: PropTypes.oneOf(Object.values(SIZE)),
  full: PropTypes.bool,
  bold: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelLocation: PropTypes.oneOf(['up', 'left', 'right', 'down']),
};

Input.defaultProps = {
  inputStyle: 'default',
  disabled: false,
  rounded: false,
  extent: 'default',
  full: false,
  bold: false,
  onChange: undefined,
  label: '',
  labelLocation: 'left',
};

export default Input;
