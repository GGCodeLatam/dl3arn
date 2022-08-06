import styled from "styled-components";

export const Container = styled.div`
  main,
  .videos {
    min-height: calc(95vh - var(--nav-size));
  }
  main {
    display: grid;
    grid-template-columns: minmax(15rem, 20rem) 1fr minmax(15rem, 20rem);
    margin: 1rem auto;

    .frame-container {
      height: 75vh;
      display: flex;
    }

    .videos {
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
    }

    .course-content {
      padding: 0 0.5rem;
      .data {
        border-bottom: 1px solid #00000020;
        padding: 1rem 1rem;
        h2 {
          font-size: 1.5rem;
        }
      }
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
  }

  .course-container {
    padding: 0 2rem;

    .course-name {
      font-size: 1.5rem;
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
`;
