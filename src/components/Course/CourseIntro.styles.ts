import styled from "styled-components";

export const CourseIntroContainer = styled.div`
  padding: 0 2rem;

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .course-image {
      width: 5rem;
      height: 5rem;
    }
    .course-name {
      font-size: 1.5rem;
    }
  }

  .video-options {
    justify-content: right !important;
  }
`;
