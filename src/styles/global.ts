import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --amethyst: #9d4eddff;
  --french-violet: #7b2cbfff;
  --orange-peel: #ff9e00ff;
  --orange: #ff8500ff;
  --persian-indigo: #3c096cff;
  --purple: #5a189aff;
  --russian-violet: #240046ff;
  --safety-orange-blaze-orange: #ff6d00ff;
  --safety-orange: #ff7900ff;
  --yellow-orange-color-wheel: #ff9100ff;


  --primary: var(--french-violet);
  --primary-contrast: #fff;
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
