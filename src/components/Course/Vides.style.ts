import styled from "styled-components";

export const VideosContainer = styled.aside`
  min-height: calc(95vh - var(--nav-size));

  background-color: #fafafa;
  display: flex;
  flex-flow: column;
  box-shadow: inset 0 -1.25rem 0.5rem -1rem #0008;

  section {
    position: relative;
    color: var(--dark);
    display: flex;
    flex-flow: column;

    h2,
    h3 {
      text-transform: capitalize;
    }

    h2 {
      font-size: 1rem;
      padding: 0 1rem;
      margin: 1rem 0 0.5rem 0;
    }
    h3 {
      font-size: 0.8rem;
      padding: 0 1rem;
      margin: 1rem 0 0.25rem 0;
    }
  }

  .videos::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1rem;
    height: 100%;
    width: 2px;
    background-color: var(--primary);
  }

  .videos {
    padding: 0 0 0 1rem;
  }

  .course {
    position: relative;
    background-color: transparent;
    border: none;
    font-size: 1.25rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: left;
    width: 100%;
  }

  .course.active {
    color: var(--primary);
  }
`;
