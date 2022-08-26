import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: minmax(15rem, 20rem) 1fr minmax(10rem, 15rem);
  margin: 1rem auto;
  width: 100%;

  .course-content {
    .instructor {
      font-size: 0.85rem;
      opacity: 0.5;
    }
    .description {
      font-size: 1rem;
      letter-spacing: 0.25px;
      line-height: 1.75rem;
      padding: 1rem 0 0 0;
    }
  }

  .loading {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 600;
    height: 100%;
    text-align: center;
  }

  .video-options {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    button {
      padding: 0.75rem 1rem;
    }
  }
`;
