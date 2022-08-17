import styled from "styled-components";

export const VideosContainer = styled.aside`
  min-height: calc(95vh - var(--nav-size));

  background-color: #fafafa;
  display: flex;
  flex-flow: column;
  box-shadow: inset 0 -1.25rem 0.5rem -1rem #0008;

  ul {
    display: flex;
    flex-flow: column;
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
