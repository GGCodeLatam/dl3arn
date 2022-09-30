import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const FooterContainer = styled.footer`
  position: relative;
  color: #fff;
  display: flex;
  flex-flow: column;
  gap: 0;

  .wave {
    width: 100%;
    transform: translate(0, 1px);
  }
  .data {
    background-color: #1e1e20;
    position: relative;
    padding: 5vh 1rem 0 1rem;

    .container {
      margin: 0 auto;
      max-width: 1200px;
    }
  }
  .copyright {
    padding: 1rem 0;
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.5;
  }

  .pages {
    display: flex;
    flex-flow: column;
    .link {
      min-width: max-content;
      opacity: 0.45;
      padding: 0.25em 0;
      margin: 0.25em 0;
      :hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }

  .sections {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: 7vh 0;

    section:not(:last-child) {
      border-right: none;
    }

    section {
      padding: 0 1em;
      width: 100%;
      h2 {
        font-size: 1.5em;
        margin: 0 0 0.25em 0;
      }
    }

    .logo {
      position: relative;
      width: max-content;
      display: flex;
      flex-flow: column;
      margin: 0 0 5em 0;

      .logo-img {
        display: block;
        font-size: 1.5rem;
      }
      .icons {
        position: absolute;
        display: flex;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%, 0);
        gap: 1em;
        justify-content: center;

        .icon-container {
          position: relative;
          width: 1.5em;
          height: 1.5em;
        }
      }
    }
  }

  .contacts {
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 0.25rem;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .contact {
      display: flex;
      align-items: center;
      gap: 0.5em;
      opacity: 0.45;
      padding: 0.25em 0;
      margin: 0.25em 0;

      .icon {
        width: 1.25em;
        height: 1.25em;
      }

      :hover {
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    section:not(:last-child) {
      border-right: 1px solid #fff2 !important;
    }
    .sections {
      flex-flow: row;
      align-items: center;

      .logo {
        margin: 0;
      }
    }

    .icons {
      position: absolute;
    }
  }
`;
