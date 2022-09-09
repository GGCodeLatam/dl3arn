import styled, { css } from "styled-components";
import breakpoints from "utils/breakpoints";

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
    --icon-width: 2.5em;

    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    border-radius: 0 0.5em 0.5em 0;
    color: #000;
    display: flex;
    flex-flow: row;
    font-size: 0.8em;
    font-weight: 600;
    margin: 1.25em 0;
    position: fixed;
    top: 3.5em;
    left: 0;
    width: 7em;
    min-width: max-content;
    z-index: 999;
    box-shadow: 0 0 0.75em #0003;
    transition: width 100ms ease;

    transform: translate(calc(-100% + var(--icon-width)), 0);
    transition: transform 250ms ease;

    .icon {
      transform: translate(0, 0);
      transition: transform 250ms ease;
      width: 2.5em;
      height: 2.5em;
      padding: 0.5em;
    }
    :hover {
      background-color: var(--primary);
      color: #fff;
      transform: translate(0, 0);
    }
  }

  .left {
    background-color: #fafafa;
    box-shadow: 0.5em 0 0.5em #0002;
    left: 0;
    height: 100vh;
    max-height: 100vh;
    overflow: scroll;
    position: fixed;
    top: 0;
    transform: translate(-100%, 0);
    transition: transform 100ms ease;
    z-index: 100;
    width: 75%;

    .close {
      background-color: #fafafa;
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
    margin: 2.75em 0 0 0;
    .instructor {
      font-size: 0.85em;
      opacity: 0.5;
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
    align-items: center;
    width: max-content;

    button {
      padding: 0.75rem 1rem;
      font-size: 0.75em;
      height: max-content;
    }
  }

  ${({ showMenu }) =>
    showMenu &&
    css`
      .left {
        transform: translate(0, 0);
      }
    `}

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(15rem, 20rem) 1fr minmax(10rem, 15rem);
    .show-menu {
      display: none;
    }
    .left {
      width: 100%;
      position: relative;
      transform: translate(0, 0);
      max-height: max-content;
      height: max-content;
      box-shadow: none;
      overflow: auto;

      .close {
        display: none;
      }
    }
    .middle {
      margin: 0 0 0 0;
    }
    .right {
      flex-flow: column;
      justify-content: flex-start;
      gap: 0.25em;
      padding: 0 0.5em;
    }
  }
`;
