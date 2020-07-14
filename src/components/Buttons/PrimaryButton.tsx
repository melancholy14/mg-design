import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

type PrimaryButtonProps = {
  /** triggers the action by clicking the button */
  onClick?: () => void;
  /** makes the button inactive */
  disabled?: boolean;
  /** reverses the background color and the font color */
  outline?: boolean;
  children: React.ReactNode;
};

const mainColor = 'royalblue';
const fontColor = 'white';

const StyledButton = styled.button<{ outline?: boolean }>`
  border: 1px solid ${mainColor};
  border-radius: 1rem;
  padding: 0.5rem 1rem;

  background-color: ${(props) => (props.outline ? fontColor : mainColor)};
  color: ${(props) => (props.outline ? mainColor : fontColor)};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    border-color: ${darken(0.2, mainColor)};
    background-color: ${(props) =>
      props.outline ? fontColor : darken(0.2, mainColor)};
    color: ${(props) => (props.outline ? darken(0.2, mainColor) : fontColor)};
  }
`;

function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  onClick: undefined,
  disabled: false,
  outline: false,
};

export default PrimaryButton;
