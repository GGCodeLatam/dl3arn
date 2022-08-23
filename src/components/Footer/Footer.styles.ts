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

  .sections {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;

    section:not(:last-child) {
      border-right: 1px solid #fff2;
    }
    section {
      margin: 2rem 0;
      padding: 0rem 2rem 0rem 0;

      > h3 {
        margin: 0.5rem 0;
      }
    }
  }

  .contacts {
    list-style: none;
    display: flex;
    flex-flow: column;
    gap: 0.25rem;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      ::before {
        content: "";
        width: 7px;
        height: 1px;
        background: #fff;
      }
    }
  }
`;
