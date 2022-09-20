import styled from "styled-components";

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
      padding: 0.25em 0;
    }
  }

  .sections {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: 7vh 0;

    section:not(:last-child) {
      border-right: 1px solid #fff2;
    }

    section {
      padding: 0 1em;
      width: 100%;

      > h3 {
        margin: 0.5rem 0;
      }
    }

    .logo {
      .icons {
        margin: 0.5em 0.5em;
        display: flex;
        gap: 1em;
        height: 3em;

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
      gap: 0.25em;
    }
  }
`;
