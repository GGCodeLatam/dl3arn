import styled, { css } from "styled-components";
import { UserModel } from "utils/types/firebase";

interface Props {
  userRole?: UserModel["role"];
  to?: "left" | "right";
  rounded?: boolean;
  fontSize?: { img?: string; name?: string; email?: string };
}
export const AvatarContainer = styled.button<Props>`
  position: relative;
  background-color: transparent;
  border: none;
  display: flex;
  flex-flow: row;
  width: max-content;
  align-items: center;
  gap: 1em;
  font-size: 1rem;

  .user {
    display: flex;
    flex-flow: column;

    .name {
      font-weight: bold;
    }
    .email {
      font-size: 0.8em;
    }
  }

  .image-container {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    border-radius: 4px;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  ::before {
    display: none;
    content: "";

    position: absolute;
    background-color: var(--user);
    z-index: 2;

    outline: 2px solid #fff;
    width: 0.5em;
    height: 0.5em;
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
          ? "background: var(--instructor);"
          : userRole === "admin"
          ? "background-color: var(--admin)"
          : ""}
      }
    `}
`;
