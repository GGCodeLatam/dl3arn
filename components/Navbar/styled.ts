import styled, { css } from "styled-components";

interface NavProps {
  isBlue: boolean;
}
export const Nav = styled.nav<NavProps>`
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  height: var(--nav-size);

  .btn {
    padding: 1em;
    background-color: transparent;
    color: #000;
  }

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
      display: block;
      font-size: 0.9em;
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
  .right,
  .middle {
    display: none;
  }

  .login {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
  }
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

  .link {
    display: grid;
    place-items: center;
    height: 100%;
  }
  .mobile {
    box-shadow: 0.5em 0 0.5em #0002;
    z-index: 9999;
    padding: 3em 1em 10vh 1em;
    background-color: #fff;
    width: 90%;
    max-width: max-content;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .close {
      position: absolute;
      top: 0;
      left: 0;
    }

    ${({ isBlue }) =>
      isBlue &&
      css`
        list-style: none;
        background: #3f6ef2;
      `}

    .logo {
      margin: 0 auto;
      width: max-content;
    }
    ul,
    .link {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    }

    ul {
      list-style: none;
    }

    .bottom {
      display: flex;
      flex-flow: column;
      gap: 1.75em;

      .link {
        position: relative;
        font-size: 0.95em;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: left;
        gap: 1em;
        padding: 0.5em 0 0.5em 1em;
        > * {
          z-index: 2;
        }

        ::before {
          z-index: 1;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background-color: var(--dark);
        }
      }
      .user {
        display: flex;
        justify-content: right;
        gap: 1em;
        .login {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  ul,
  li {
    list-style: none;
  }

  ${({ isBlue }) =>
    isBlue &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

      &,
      .mobile,
      .btn {
        color: #fff;
      }
      &,
      .mobile {
        background: #3f6ef2;
      }

      .right .link {
        opacity: 0.75;
      }
      .link:hover {
        opacity: 1;
      }
      .logo {
        filter: none;
      }
    `}

  @media screen and (min-width: 720px) {
    .right {
      display: flex;
      gap: 0.25rem;
    }
    .btn,
    .mobile {
      display: none;
    }
  }
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
