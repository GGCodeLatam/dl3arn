import styled, { css } from "styled-components";
import networkIcons from "utils/networkIcons";

interface BadgeProps {
  bg?: string;
  width?: string;
  height?: string;
  dark?: boolean;
}
const Badge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: #fff;

  img {
    width: 2.5rem;
    height: 2.5rem;
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

  ${({ height }) =>
    height &&
    css`
      img {
        height: ${height};
      }
    `}
${({ width }) =>
    width &&
    css`
      img {
        width: ${width};
      }
    `}
`;

interface Props {
  network?: string;
  onlyIcon?: boolean;
  dark?: boolean;
  width?: string;
  height?: string;
  toRight?: boolean;
}
export function NetworkBadge({
  width,
  height,
  network,
  toRight,
  onlyIcon,
  ...styled
}: Props) {
  if (!network) return null;
  const obj = networkIcons[network];
  if (!obj.icon) return null;
  return (
    <Badge width={width} height={height} {...styled}>
      {!onlyIcon && !toRight && <p>{network}</p>}
      {obj && <img src={obj.icon} alt={network} />}
      {!onlyIcon && toRight && <p>{network}</p>}
    </Badge>
  );
}

export function Dl3arnBadge() {
  return <div></div>;
}
