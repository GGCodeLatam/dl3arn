import styled from "styled-components";

export const Label = styled.label`
  width: 100%;

  textarea,
  input {
    width: 100%;
    padding: 0.5em 0.5em;
  }
  textarea {
    resize: vertical;
  }

  span {
    display: block;
    padding: 0.25em 0.5em;
    opacity: 0.5;
    font-size: 0.85em;
  }
`;
