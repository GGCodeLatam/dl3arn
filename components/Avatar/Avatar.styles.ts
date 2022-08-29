import styled from "styled-components";

export const AvatarContainer = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-flow: row;
  width: max-content;
  align-items: center;
  gap: 1rem;

  .name {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }

  .image-container {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;

    .img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
    }
  }
`;
