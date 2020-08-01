import PropTypes from 'prop-types';

import { SIZE } from '../../common/sizes';

export type StyledProps = {
  /** reverses the background color and the font color */
  outline?: boolean;
  /** makes the button look rounded */
  rounded?: boolean;
  /** makes the button look lighter */
  light?: boolean;
  /** adjust the size of the button */
  size?: keyof typeof SIZE;
  /** adjust the length of the button */
  full?: boolean;
  /** makes the text bolder */
  bold?: boolean;
};

export type ButtonProps = StyledProps & {
  /** triggers the action by clicking the button */
  onClick?: () => void;
  /** makes the button inactive */
  disabled?: boolean;
  children: React.ReactNode;
};

export const propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  light: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZE)),
  full: PropTypes.bool,
  bold: PropTypes.bool,
};

export const defaultProps = {
  onClick: undefined,
  disabled: false,
  outline: false,
  rounded: false,
  light: false,
  size: 'default',
  full: false,
  bold: false,
};
