import styled from "styled-components";

export const QuienesSomosContainer = styled.main`
  position: relative;
  padding: 25vh 1rem;
  border: 1px solid #000;
  border-bottom: none;
  border-top: none;
  height: 100%;

  color: #fff;
  height: 100%;
  padding: 15vh 1rem;

  .bg,
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bg {
    background: linear-gradient(#4374ff, #030816);
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 0 0 5rem 0;
  }

  section {
    position: relative;
  }

  .members {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    list-style: none;
  }
`;

export const Member = styled.li`
  display: flex;
  flex-flow: column;
  border-radius: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fff;
  color: #000;
  box-shadow: 0 5px 10px #0004;
  transition: transform 0.35s;

  :hover {
    z-index: 10;
    transform: scale(105%);
  }

  .img-container {
    position: relative;
    width: 100%;
    height: 60vh;
    object-fit: cover;
    object-position: center;
    margin: 0 auto;
  }

  .img {
    object-fit: cover;
    object-position: top;
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

  > div {
    margin: 1rem 0;
  }
`;
