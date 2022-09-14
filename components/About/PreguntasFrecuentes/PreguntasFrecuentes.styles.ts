import styled from "styled-components";

export const PreguntasFrecuentesContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  h3 {
    margin: 1em 0 0 0;
    padding: 0.5em 0;
  }

  > p {
    text-align: center;
  }
  p {
    line-height: 1.75em;
    opacity: 0.6;
    font-size: 0.95em;
  }

  ul {
    margin: 2em 0 0 0;
    list-style: none;

    a {
      color: #fff;
      text-decoration: underline;
    }

    li {
      p {
        opacity: 1;
      }
      display: flex;
      align-items: center;
      gap: 1em;
      font-weight: 500;
    }
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    margin: 1em 0 0 0;
  }

  .icon {
    color: var(--primary);
  }
  .more-questions {
    width: max-content;
    margin: 3em auto 0 auto;
    padding: 0.7em 3em;
  }
`;
