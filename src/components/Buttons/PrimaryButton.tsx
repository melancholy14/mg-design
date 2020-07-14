import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { ButtonProps, StyledButton } from '.';

const mainColor = 'royalblue';
const fontColor = 'white';

const ExtendedStyledButton = styled(StyledButton)`
  border: 1px solid ${mainColor};

  background-color: ${(props) => (props.outline ? fontColor : mainColor)};
  color: ${(props) => (props.outline ? mainColor : fontColor)};

  &:hover {
    border-color: ${darken(0.2, mainColor)};
    background-color: ${(props) =>
      props.outline ? fontColor : darken(0.2, mainColor)};
    color: ${(props) => (props.outline ? darken(0.2, mainColor) : fontColor)};
  }
`;

function PrimaryButton({ children, ...props }: ButtonProps) {
  return <ExtendedStyledButton {...props}>{children}</ExtendedStyledButton>;
}

// PrimaryButton.propTypes = {
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   outline: PropTypes.bool,
//   rounded: PropTypes.bool,
// };

// PrimaryButton.defaultProps = {
//   onClick: undefined,
//   disabled: false,
//   outline: false,
//   rounded: false,
// };

export default PrimaryButton;
