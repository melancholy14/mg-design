import PropTypes from 'prop-types';

export type StyledHeadingProps = {
  /** makes the text look bolder */
  bold?: boolean;
};

export type HeadingProps = StyledHeadingProps & {
  children: React.ReactNode;
};

export const propTypes = {
  bold: PropTypes.bool,
};

export const defaultProps = {
  bold: false,
};
