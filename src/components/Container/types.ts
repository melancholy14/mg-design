import PropTypes from 'prop-types';

export type StyledProps = {
  /** makes the container have full-length */
  full?: boolean;
};

export type ContainerProps = StyledProps & {
  children: React.ReactNode;
};

export const propTypes = {
  full: PropTypes.bool,
};

export const defaultProps = {
  full: false,
};
