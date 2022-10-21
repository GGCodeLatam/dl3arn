import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --gold: #ba9050;
  --brown: #362d1f;
  --beige: #f2da99;

  --primary: var(--gold);
  --primary-rgb: 186, 144, 80;
  --primary-contrast: #fff;

  --dark-primary: var(--persian-indigo);
  --dark: #1e1e20;
  --light: #fafaff;

  --instructor: #a5f;
  --user: #5a5;
  --admin: var(--primary);

  --nav-size: 56px;
}

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #1e1e20;
  font-size: 16px;
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

a, button {
  cursor: pointer;
  border: none;
}
`;
