import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --french-violet: #8bcc8fff;

  --amethyst: #9d4eddff;
  --orange-peel: #ff9e00ff;
  --orange: #ff8500ff;
  --persian-indigo: #3c096cff;
  --purple: #5a189aff;
  --russian-violet: #240046ff;
  --safety-orange-blaze-orange: #ff6d00ff;
  --safety-orange: #ff7900ff;
  --yellow-orange-color-wheel: #ff9100ff;


  --primary: var(--orange);
  --primary-rgb: 255, 132, 0;
  --primary-contrast: #fff;

  --gradient: linear-gradient(#4374ff, #030816);

  --dark-primary: var(--persian-indigo);
  --dark: #1e1e20;
  --light: #fafaff;

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
