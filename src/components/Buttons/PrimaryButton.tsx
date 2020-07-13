import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type PrimaryButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const StyledButton = styled.button`
  background-color: royalblue;
  border-width: 0px;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: white;

  &:disabled {
    opacity: 0.5;
  }
`;

function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

PrimaryButton.propTypes = {
  // Action when you click the button
  onClick: PropTypes.func,
  /** disabled button or not */
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  onClick: undefined,
  disabled: false,
};

export default PrimaryButton;
