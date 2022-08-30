import styled from "styled-components";

export const VideoContentContainer = styled.div`
  font-size: 1rem;

  .frame-container {
    width: 100%;
    height: 40rem;
    min-height: 40rem;
    display: flex;
    flex-flow: column;
  }
  .data {
    font-size: 0.8em;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #00000020;
    padding: 1rem 0 1rem 1rem;

    h2 {
      font-size: 1.25em;
    }
  }
`;
