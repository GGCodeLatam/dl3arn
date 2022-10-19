import styled, { css } from "styled-components";
import breakpoints from "utils/breakpoints";

interface NavProps {
  isBlue: boolean;
  height: number;
}
export const Nav = styled.nav<NavProps>`
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
  height: var(--nav-size);
  font-size: calc(1rem + 0.75vw);
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px #0002;

  .btn {
    padding: 1em;
    background-color: transparent;
    color: #000;
  }

  .logo {
    font-size: 0.85rem;
  }

  .wrapper,
  .left,
  .right,
  .avatar {
    height: 100%;
  }

  .wrapper {
    padding: 0 0.15em;
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
      text-transform: capitalize;
      font-size: 0.9em;
      opacity: 0.5;
      padding: 0 1rem;
      width: max-content;
      display: flex;
      align-items: center;
      gap: 0.25em;
    }

    .link:hover {
      opacity: 1;
    }
  }

  .left {
    gap: 1rem;
  }
  .left .links,
  .right,
  .middle {
    display: none;
  }

  .login {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
  }

  .link {
    display: grid;
    place-items: center;
    height: 100%;
    font-weight: 400;
  }

  .mobile {
    box-shadow: 0.5em 0 0.5em #0002;
    z-index: 9999;
    padding: 2em 1em 2em 1em;
    background-color: #fff;
    width: 90%;
    min-width: 320px;
    max-width: 480px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .close {
      padding: calc(2em + 2vw);
      position: absolute;
      top: 0;
      right: 0;
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
      gap: 1em;

      .links,
      .categories {
        display: flex;
        flex-flow: column;
        gap: 0.75em;
      }

      .links {
        .icon {
          transition: all 100ms;
        }
        .link:hover {
          color: var(--primary);
          .icon {
            color: var(--primary);
          }
        }
      }

      .category {
        font-size: calc(0.5em + 0.5vh);
        font-weight: bold;
      }

      .categories {
        position: relative;
        padding: 0 0.75em;

        ::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background-color: #0005;
        }
      }

      .link {
        position: relative;
        font-size: calc(0.4em + 0.5vh);
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: left;
        text-transform: capitalize;
        gap: 1em;
        padding: 0.5em 0 0.5em 0;
        > * {
          z-index: 2;
        }
      }

      .user {
        display: flex;
        justify-content: left;
        gap: 1em;
        .login {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  ${({ height }) =>
    css`
      .mobile {
        height: ${height}px;
      }
    `}

  ul,
  li {
    list-style: none;
  }

  .categories {
    position: relative;

    height: 75%;

    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      height: 100%;
    }

    .categories-list {
      display: flex;
      flex-flow: column;
      gap: 0.25em;
      box-shadow: 0 5px 10px #0002;
      background-color: transparent;
      border-radius: 2px;

      position: absolute;
      top: 100%;
      left: 0;
      z-index: 9999;
      font-size: 0.75em;
      width: 150px;
      min-width: max-content;
      max-width: 300px;
      padding: 0.5em;
      background-color: #fff;

      a {
        opacity: 0.5;
        display: flex;
        align-items: center;
        padding: 0.5em 0.75em;
        width: 100%;
        font-size: 1em;
      }
      a:hover {
        opacity: 1;
      }
    }
  }

  .menu-mobile {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 0.5em;

    .login {
      width: 100%;
      text-align: center;
      font-size: 0.65em;
      padding: 0.75em 1.5em;
    }

    .avatar {
      font-size: 0.9rem;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    z-index: 100;

    .logo {
      font-size: 1rem;
    }
    .wrapper {
      padding: 0 1em;
      width: 100%;
    }

    .left .links,
    .right {
      display: flex;
      gap: 0.5rem;
    }
    .user {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
    .link {
      padding: 0 0.25em !important;
    }

    .btn,
    .mobile {
      display: none;
    }

    .menu-mobile {
      display: none;
    }
    .categories-list {
      font-size: 0.9em !important;
      margin: 0.5em 0;
      .link {
        display: flex;
        justify-content: space-between;
        min-width: 200px;
        padding: 0.25em 1em !important;
      }
      *:not(:last-child) .link {
        border-bottom: 1px solid #0001;
      }
    }
  }
  .red * {
    background-color: red !important;
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
