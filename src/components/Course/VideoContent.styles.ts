import styled from "styled-components";

export const VideoContentContainer = styled.div`
  .frame-container {
    height: 40rem;
    min-height: 40rem;
    display: flex;
    flex-flow: column;
  }
  .data {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #00000020;
    padding: 1rem 0 1rem 1rem;

    h2 {
      font-size: 1.5rem;
    }

    .video-options {
      display: flex;
      flex-flow: row;
      gap: 1rem;
      .btn {
        border-radius: 0 !important;
        font-size: 0.9rem;
        color: var(--dark);
      }
    }
  }
`;
