import styled, { css } from "styled-components";

interface StyleProps {
  selected: boolean;
  blocked: boolean;
  isFree: boolean;
}
export const Container = styled.button<StyleProps>`
  background-color: transparent;
  border-radius: 0;
  border: none;
  position: relative;
  transition: transform 0.25s;
  width: 100%;

  ::before {
    background-color: #0000;
    content: "";
    height: 100%;
    right: 0;
    position: absolute;
    top: 0;
    width: 100%;
    transition: width 0.25s;
  }

  > div {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 0.5rem;
  }

  .icon {
    transform: translate(0, 1px);
  }
  .name {
    width: 100%;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: left;
  }
  .duration {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.8rem;
    min-width: max-content;
  }

  ${({ blocked }) =>
    blocked &&
    css`
      .name,
      .duration {
        opacity: 0.5;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      ::before {
        background-color: var(--primary);
        color: var(--primary-contrast);
        width: 100%;
        box-shadow: 0 10px 15px -8px var(--primary);
      }

      .name,
      .duration,
      .icon {
        opacity: 1;
        z-index: 2;
      }

      color: #fff;
    `}
`;
