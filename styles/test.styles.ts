import styled from "styled-components";

export const Container = styled.div`
  section {
    max-width: 1200px;
    margin: 0 auto;
  }

  .buttons {
    > div {
      max-width: 300px;
      margin: 1rem 0;
      display: flex;
      flex-flow: column;
      gap: 1rem;
    }
  }

  .cards {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 3rem;
  }

  main {
    width: 100%;
  }

  .btn {
    display: block;
    margin: 0 auto;
    background-color: transparent;
    border: none;
    padding: 0.75rem 2rem;
    font-weight: 700;
    font-size: 1rem;
  }
  .primary {
    background-size: 500%;
    background-position: 0 50%;

    animation: bg 5s linear infinite;
    color: #fff;

    @keyframes bg {
      from {
        background-position: 0 50%;
      }
      to {
        background-position: 100em 50%;
      }
    }
  }
`;
