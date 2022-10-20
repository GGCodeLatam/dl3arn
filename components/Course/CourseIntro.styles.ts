import styled from "styled-components";
import breakpoints from "utils/breakpoints";

export const CourseIntroContainer = styled.div`
  padding: 1.5em 2em;

  .info {
    display: flex;
    align-items: center;
    gap: 1em;
    white-space: pre-line;

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

  .content-grid {
    display: grid;
    gap: 5vw;
    grid-template-columns: 1fr;
    margin: 2em 0;
    width: 100%;

    section {
      font-size: 1em;
      h2 {
        font-size: 1.15em;
        margin: 0.25em 0;
      }
    }

    .instructor-data {
      > .name {
        font-weight: bold;
        font-size: 1em;
        text-decoration: underline;
        color: var(--primary);
        margin: 0 0 1em 0;
      }
      .more {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1em;
        align-items: flex-start;
        .bio {
          font-size: 0.95em;
        }
      }
    }

    .content-sections {
      display: flex;
      flex-flow: column;
      margin: 0.5em 0 0 0;

      > li {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0.75em 1.25em;
        background-color: #00000008;
        border: 2px solid #0000000a;
        border-bottom: none;
        :last-child {
          border-bottom: 2px solid #0000000a;
        }
      }

      .section-name {
        width: 100%;
        font-weight: 600;
        font-size: 0.9em;
      }

      .right {
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 0.75em;
        font-weight: 600;
        font-size: 0.75em;
        opacity: 0.5;
        width: 100%;
        flex-flow: row;
      }
    }
  }

  .metadata {
    display: flex;
    align-items: center;
    gap: 0.75em;
    font-size: 0.85em;
    font-weight: 600;
    margin: 1.5em 0 0 0;
  }

  .dot {
    width: 4px;
    height: 4px;
    background-color: #0005;
    border-radius: 100%;
  }

  @media screen and (min-width: ${breakpoints.pc}) {
    .content-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
