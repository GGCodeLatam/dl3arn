import styled from "styled-components";

export const CourseIntroContainer = styled.div`
  padding: 0 2rem;

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .img-container {
      position: relative;
      width: 6rem;
      height: 6rem;

      .course-image {
        object-fit: cover;
        border-radius: 5px;
      }
    }
    .course-name {
      font-size: 1.5rem;
    }
  }
`;
