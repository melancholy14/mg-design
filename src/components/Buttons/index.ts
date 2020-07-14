import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import PrimaryButton from './PrimaryButton';

export type ButtonProps = {
  /** triggers the action by clicking the button */
  onClick?: () => void;
  /** makes the button inactive */
  disabled?: boolean;
  /** reverses the background color and the font color */
  outline?: boolean;
  /** makes the button look rounded */
  rounded?: boolean;
  children: React.ReactNode;
};

export const StyledButton = styled.button<{
  outline?: boolean;
  rounded?: boolean;
}>`
  border-radius: ${(props) => (props.rounded ? '1rem' : 0)};
  padding: 0.5rem 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;

// function Button({ children, ...props }: ButtonProps) {
//   return <StyledButton {...props}>{children}</StyledButton>;
// }

// Button.propTypes = {
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   outline: PropTypes.bool,
//   rounded: PropTypes.bool,
// };

// Button.defaultProps = {
//   onClick: undefined,
//   disabled: false,
//   outline: false,
//   rounded: false,
// };

export {
  // Button,
  PrimaryButton,
};
