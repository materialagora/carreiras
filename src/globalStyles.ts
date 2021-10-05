import { createGlobalStyle } from 'styled-components';
import background from './assets/background.jpg';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root { 
    height: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
    background: url(${background}) fixed;
    background-size: cover;
  }

  button {
    cursor: pointer;
  }

  .ReactModal__Body--open {
  overflow-y: hidden;
}
`;
