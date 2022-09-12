import styled from "styled-components";

export const NavbarAboutContainer = styled.nav`
  background-color: red;
  display: flex;
  align-items: center;
  height: var(--nav-size);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;

    .img {
      position: relative;
      filter: drop-shadow(0 0px 2px #000a);
      width: 7em;
      height: 2em;
    }
    .beta {
      font-size: 0.75em;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: var(--primary);
    }
  }
`;
