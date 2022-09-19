import styled from "styled-components";

export const InformationContainer = styled.div`
  .inline-flex {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 1em;
  }

  input {
    padding: 0.5em 0.75em;
  }
  .bio {
    width: 100%;
    textarea {
      width: 100%;
      min-height: 7em;
      background-color: #aaa2;
      resize: vertical;
      border: none;
      padding: 1em;
      border-radius: 5px;
    }
    p {
      font-size: 0.75em;
      opacity: 0.5;
      text-align: right;
      margin: 0.5em 0;
    }
  }

  .no-image {
    display: block;
    background-color: #ddd !important;
    width: 100%;
    height: 100%;
  }

  .img-input {
    display: block;
    width: 7em;
    height: 7em;

    .overlay {
      width: 100%;
      height: 100%;
    }
    input {
      display: none;
    }
  }

  .img-preview {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    gap: 0.5em;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;

    .img-container {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 5px;
    }
    .img {
      object-fit: cover;
      object-position: center;
    }
  }
  .input-container {
    position: relative;
    display: grid;
    gap: 0.25em;
  }

  .defaults {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    gap: 0.25em;
    height: 40%;
    place-items: center;
    padding: 0.25em;
  }

  .default-img {
    position: relative;
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0.25em 0.5em #0008;

    .img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
