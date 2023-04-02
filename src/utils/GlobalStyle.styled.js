import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 80px 0;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: #0A0A0A;
  background-color: #FBFBFB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
h1, h2, p {
    margin: 0;
}
`;
