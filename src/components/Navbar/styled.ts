import styled, { css } from "styled-components";

interface NavProps {
  isBlue: boolean;
}
export const Nav = styled.nav<NavProps>`
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  height: var(--nav-size);

  .wrapper,
  .left,
  .right,
  .avatar {
    height: 100%;
  }

  .wrapper {
    padding: 0 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;

    .link {
      font-size: 0.85rem;
      opacity: 0.5;
      padding: 0 1rem;
      width: max-content;
    }
    .link:hover {
      opacity: 1;
    }
  }

  .left {
    gap: 1rem;
  }
  .login {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
  }
  .logo {
    width: 7rem;
    filter: drop-shadow(0 0px 2px #000a);
    img {
      object-fit: contain;
      object-position: center;
      max-width: 100%;
      height: 100%;
    }
  }

  .logo,
  .link {
    display: grid;
    place-items: center;
    height: 100%;
  }

  ${({ isBlue }) =>
    isBlue &&
    css`
      background: transparent;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      color: #fff;

      .right .link {
        opacity: 0.7;
      }
      .link:hover {
        opacity: 1;
      }
      .logo {
        filter: none;
      }
    `}
`;

export const Verify = styled.button`
  position: absolute;
  bottom: 7vh;
  left: 50%;

  transform: translate(-50%, 0);

  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: var(--dark);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  border-radius: 9999px;
`;
