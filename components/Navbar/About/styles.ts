import styled from "styled-components";

export const NavbarAboutContainer = styled.nav`
  display: flex;
  align-items: center;
  height: var(--nav-size);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  .wrapper,
  .links {
    display: flex;
    align-items: center;
  }

  .wrapper {
    width: 100%;
    padding: 0 1em;
    justify-content: space-between;
  }
  .links {
    font-size: 0.9em;
    width: max-content;
    gap: 2em;
    .link {
      width: max-content;
    }
  }
`;
