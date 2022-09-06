import styled from "styled-components";

export const NavCategories = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
  }

  .category {
    a {
      background-color: #ddd;
      display: grid;
      place-items: center;
      width: 100%;
      font-size: 0.8em;
      padding: 0.75em 0;
      border-radius: 5px;
    }
  }
`;
