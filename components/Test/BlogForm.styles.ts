import styled from "styled-components";

export const BlogFormContainer = styled.form`
  width: 100%;
  padding: 1em 0;

  .input-images {
    margin: 0.75em 0 0 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      display: block;
      background-color: var(--primary);
      color: var(--primary-contrast);
      padding: 0.15em 0.5em;
      border-radius: 2px;
      font-size: 0.9em;
      transition: transform 0.15s ease;
    }

    .metadata {
      margin: 0 0 0 0.5em;
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-size: 0.8em;
    }

    > input {
      display: none;
    }

    :hover {
      span {
        transform: scale(105%);
      }
    }
  }

  .images {
    display: flex;
    flex-flow: column;
    gap: 0.25em;

    .image {
      display: flex;
      align-items: center;
      gap: 0.75em;

      .left {
        position: relative;
        width: 4rem;
        height: 4rem;
      }
    }

    label {
      span {
        font-size: 0.75em;
      }
    }
  }

  button[type="submit"] {
    background-color: transparent;
    color: var(--primary);
    display: block;
    margin: 0 0 0 auto;
    padding: 0.25em 0.5em;
    width: max-content;
    opacity: 0.5;
    transition: all 0.15s ease;
    transform: translate(0, 0) scale(100%);

    :hover {
      opacity: 1;
      transform: translate(0, -2px) scale(105%);
    }
  }
`;
