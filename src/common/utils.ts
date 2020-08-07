import { SIZE } from './sizes';

export const makeFontSizeBySize = (size?: string) => {
  switch (size) {
    case SIZE.small:
      return '0.85rem';
    case SIZE.medium:
      return '1.25rem';
    case SIZE.large:
      return '1.5rem';
    default:
      return '1rem';
  }
};

export const makePaddingBySize = (size?: string) => {
  switch (size) {
    case SIZE.small:
      return '0.3rem 0.6rem';
    case SIZE.medium:
      return '0.6rem 1.2rem';
    case SIZE.large:
      return '0.8rem 1.6rem';
    default:
      return '0.5rem 1rem';
  }
};
