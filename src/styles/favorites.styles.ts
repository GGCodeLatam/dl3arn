import styled from "styled-components";

export const FavoritesContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  .favorites {
    display: flex;
    flex-flow: column;
  }
`;

export const Favorite = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
