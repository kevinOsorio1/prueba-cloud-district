import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: auto;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  `;
