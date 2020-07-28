import { createGlobalStyle, css } from 'styled-components';

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext';

export const bodyStyles = css`
  margin: 0;
  font-family: 'Source Sans Pro', --apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antaialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
  font-display: optional;
`;

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    ${bodyStyles}
  }
`;
