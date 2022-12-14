import styled, { css } from "styled-components";

export interface BadgeProps {
  bg?: string;
  width?: string;
  height?: string;
  size?: string | number;
  dark?: boolean;
}
export const Badge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: #fff;

  .img-container {
    --size: 2em;
    position: relative;
    height: var(--size);
    width: var(--size);
  }

  ${({ bg }) =>
    bg &&
    css`
      background-color: ${bg};
    `}
  ${({ dark }) =>
    dark &&
    css`
      color: var(--dark);
    `}

    ${({ size }) =>
    size &&
    css`
      .img-container {
        --size: ${size}em;
      }
    `}
  ${({ height }) =>
    height &&
    css`
      .img-container {
        height: ${height};
      }
    `}
  ${({ width }) =>
    width &&
    css`
      .img-container {
        width: ${width};
      }
    `}

    p {
    text-transform: capitalize;
  }
`;
