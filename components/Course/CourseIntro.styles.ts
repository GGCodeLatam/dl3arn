import styled from "styled-components";

export const CourseIntroContainer = styled.div`
  padding: 1.5em 2em;
  margin: 0 auto;

  .info {
    display: flex;
    align-items: center;
    gap: 1em;

    .img-container {
      position: relative;
      width: 5em;
      height: 5em;

      .course-image {
        object-fit: cover;
        border-radius: 5px;
      }
    }
    .course-name {
      font-size: 1.5em;
    }
  }

  .description {
    font-size: 1em;
    max-width: 720px;
    margin: 2em 0;
  }

  .instructor-data {
    margin: 1em 0;
    .description {
      margin: 1em 0;
    }
  }
`;
