import styled from "styled-components";

export const InformationContainer = styled.div`
  .no-image {
    display: block;
    background-color: #ddd !important;
    width: 100%;
    height: 100%;
  }
  .img-input {
    width: 5em;
    height: 5em;
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
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .img {
      object-fit: cover;
      object-position: center;
    }
  }
`;
