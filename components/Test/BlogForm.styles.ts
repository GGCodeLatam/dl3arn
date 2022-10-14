import styled from "styled-components";

export const BlogFormContainer = styled.form`
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
`;
