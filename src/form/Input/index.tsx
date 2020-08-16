import React from 'react';
import PropTypes from 'prop-types';

import { SIZE } from '../../common/sizes';
import { STYLES } from '../../common/styles';

import { InputProps } from './types';
import { Wrapper, StyledInput } from './styles';

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
  labelLocation: PropTypes.oneOf(['up', 'left']),
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
