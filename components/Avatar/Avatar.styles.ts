import styled, { css } from "styled-components";
import { UserModel } from "utils/types/firebase";

interface Props {
  userRole?: UserModel["role"];
  to?: "left" | "right";
}
export const AvatarContainer = styled.button<Props>`
  position: relative;
  background-color: transparent;
  border: none;
  display: flex;
  flex-flow: row;
  width: max-content;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  .user {
    display: flex;
    flex-flow: column;

    .name {
      font-weight: bold;
      font-size: 0.85em;
    }
    .email {
      font-size: 0.8em;
    }
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
  ::before {
    display: none;
    content: "";
    z-index: 1;

    position: absolute;

    outline: 2px solid #fff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }

  ${({ userRole, to }: Props) =>
    userRole &&
    css`
      ::before {
        ${to === "right" &&
        `
          top: 0; 
          left: 0; 
          transform: translate(-25%, -25%);
        `}

        ${to === "left" &&
        `
          top: 0; 
          left: auto; 
          right: 0;
          transform: translate(25%, -25%);
        `}

        display: block;
        ${userRole === "instructor"
          ? "background: #5df;"
          : userRole === "admin"
          ? "background-color: var(--primary)"
          : ""}
      }
    `}
`;
