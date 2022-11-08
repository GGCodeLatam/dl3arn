import styled, { css } from "styled-components";
import breakpoints from "utils/breakpoints";

interface Props {
  showMenu: boolean;
}
export const CourseContainer = styled.main<Props>`
  margin: 0 auto 10vh auto;
  width: 100%;

  h1 {
    padding: 0.5em 0;
    font-size: 1.5em;
    text-align: center;
  }

  h2 {
    font-size: 0.95em;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }

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
    z-index: 9999;
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
    flex-flow: row wrap;
    padding: 0 1em 0.5em 1em;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    background: rgba(var(--primary-rgb), 0.25);
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
      .show-menu {
        display: none;
      }
    `}

  .buy-nft {
    color: #5af;
    text-decoration: underline;
    font-size: 0.75em;
    font-weight: 500;
  }
  .mint {
    display: flex;
    width: 100%;
    gap: 1em;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    .grid {
      grid-template-columns: minmax(15rem, 20rem) 1fr minmax(10rem, 15rem);
    }
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
      z-index: 1;

      .close {
        display: none;
      }
    }
    .middle {
      margin: 0 0 0 0;
      border: 1px solid #0003;
      border-top: none;
      border-bottom: none;
    }
    .right {
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.25em;
      padding: 0 1em;

      .info {
        display: flex;
        padding: 1em 0;

        .f-inline {
          display: flex;
          gap: 1em;
        }

        .img-container {
          position: relative;
          --size: 2.5em;
          width: var(--size);
          height: var(--size);

          .course-image {
            object-fit: cover;
            border-radius: 5px;
          }
        }

        .name {
          font-size: 0.95em;
        }

        .price {
          font-weight: 500;
        }
      }
    }
  }

  .credit-card {
    font-size: 0.8em;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: #fff;
    padding: 0.75em 1em;
    border-radius: 5px;
    margin: 1em 0 0 0;
  }
`;
