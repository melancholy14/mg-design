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

  }
`;

type InputProps = StyledInputProps & {
  /** makes the button inactive */
  disabled?: boolean;
  value?: string | number;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ ...props }: InputProps) {
  return <StyledInput {...props} />;
}

Input.propTypes = {
  inputStyle: PropTypes.oneOf(Object.values(STYLES)),
  /** makes the button look rounded */
  rounded: PropTypes.bool,
  /** adjust the size of the button */
  extent: PropTypes.oneOf(Object.values(SIZE)),
  /** adjust the length of the button */
  full: PropTypes.bool,
  /** makes the text bolder */
  bold: PropTypes.bool,
  /** makes the button inactive */
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  inputStyle: 'default',
  disabled: false,
  rounded: false,
  extent: 'default',
  full: false,
  bold: false,
  onChange: undefined,
};

export default Input;
