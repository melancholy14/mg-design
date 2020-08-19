import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SIZE } from '../../common/sizes';
import { STYLES } from '../../common/styles';

import { InputProps } from './types';
import { Wrapper, StyledInput } from './styles';

function Input({
  id,
  label,
  labelLocation,
  icon,
  children,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <Wrapper htmlFor={id} labelLocation={labelLocation}>
      <span>{label}</span>
      <StyledInput {...props} icon={icon} focused={focused}>
        {icon === 'left' && children && <div>{children}</div>}
        <input
          {...props}
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {icon === 'right' && children && <div>{children}</div>}
      </StyledInput>
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
  icon: PropTypes.oneOf(['left', 'right']),
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
  icon: 'left',
};

export default Input;
