import styled from "styled-components";

export const TeachingContainer = styled.main`
  .head {
    max-width: 1200px;
    margin: 10vh auto;
    text-align: center;
  }

  .form,
  label {
    display: flex;
    flex-flow: column;
  }

  .form {
    box-shadow: 0 5px 10px #0004;
    padding: 2vw;
    border-radius: 5px;
    gap: 1em;
    max-width: 720px;
    margin: 0 auto;

    label {
      display: flex;
      width: 100%;
      span {
        font-weight: bold;
        font-size: 0.8em;
        margin: 0.25em 0;
      }
    }

    input {
      padding: 0.75em 1em;
    }
    textarea {
      padding: 1em;
      resize: vertical;
      height: 25em;
    }
  }
`;
