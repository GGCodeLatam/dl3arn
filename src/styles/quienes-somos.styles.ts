import styled from "styled-components";

export const QuienesSomosContainer = styled.main`
  background: var(--gradient);
  color: #fff;
  height: 100%;
  padding: 25vh 1rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin: 0 0 5rem 0;
  }

  .members {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    list-style: none;
    margin: 0 0 10vh 0;
  }
`;

export const Member = styled.li`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2rem;
  color: #000;
  box-shadow: 0 5px 10px #0004;
  transition: transform 0.35s;

  :hover {
    z-index: 10;
    transform: scale(125%);
  }

  img {
    width: 75%;
    margin: 0 auto;
  }

  h3 {
    color: var(--primary);
    text-align: center;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0.5;
  }
`;
