import styled, { css } from "styled-components";

interface Props {
  width: string;
  height?: string;
  aspectRatio?: string;
}
const Placeholder = styled.span<Props>`
  display: block;
  border-radius: 5px;

  ${({ width, height, aspectRatio }) =>
    css`
      width: ${width};
      height: ${height};
      aspect-ratio: ${aspectRatio};
    `}

  --bg: #ddd;
  background: linear-gradient(-90deg, var(--bg) 50%, #eee, var(--bg) 75%);
  background-size: 400% 400%;
  animation: gradient 2s linear infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Placeholder;
