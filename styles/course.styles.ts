import styled, { css } from "styled-components";

// grid-template-columns: minmax(15rem, 20rem) 1fr minmax(10rem, 15rem);
interface Props {
  showMenu: boolean;
}
export const Container = styled.main<Props>`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto 10vh auto;
  width: 100%;

  .show-menu {
    align-items: center;
    background-color: #fff;
    border-radius: 0 0.5em 0.5em 0;
    color: #000;
    display: flex;
    flex-flow: row;
    font-size: 0.8em;
    font-weight: 600;
    gap: 1em;
    justify-content: space-between;
    margin: 1.25em 0;
    padding: 1em 1em 1em 2em;
    position: fixed;
    top: var(--nav-size);
    left: 0;
    width: 25%;

    .icon {
      transform: translate(0, 0);
      transition: transform 100ms ease;
    }
    :hover {
      background-color: var(--primary);
      color: #fff;
      .icon {
        transform: translate(5px, 0);
      }
    }
  }

  .left {
    background-color: #fafafa;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-100%, 0);
    transition: transform 100ms ease;
    box-shadow: 0.5em 0 0.5em #0002;
    z-index: 9999;
    max-height: 100vh;
    overflow: scroll;

    .close {
      background-color: #fff;
      display: block;
      padding: 1em 2em;
      position: sticky;
      right: 0;
      text-align: right;
      top: 0;
      width: 100%;
      z-index: 9999;
    }
  }

  .middle {
    .instructor {
      font-size: 0.85em;
      opacity: 0.5;
    }
    .description {
      font-size: 1rem;
      letter-spacing: 0.25px;
      line-height: 1.75em;
      padding: 1em 0 0 0;
    }
  }

  .right {
    display: block;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }

  .loading {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 600;
    height: 100%;
    text-align: center;
  }

  .video-options {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    button {
      padding: 0.75rem 1rem;
    }
  }

  ${({ showMenu }) =>
    showMenu &&
    css`
      .left {
        transform: translate(0, 0);
      }
    `}
`;
