import styled, { css } from "styled-components";
import { UserModel } from "utils/types/firebase";

interface Props {
  userRole?: UserModel["role"];
}
export const AvatarContainer = styled.button<Props>`
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
    border-radius: 4px;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  ${({ userRole }) =>
    userRole === "admin" &&
    css`
      .image-container {
        outline: 2px solid #d63af9;
        outline-offset: 2px;
      }
    `}
`;
