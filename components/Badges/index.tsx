import Image from "next/image";
import networkIcons from "utils/networkIcons";
import { Badge } from "./Badges.styles";

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
      {obj && <Image src={obj.icon} alt={network} />}
      {!onlyIcon && toRight && <p>{network}</p>}
    </Badge>
  );
}

export function Dl3arnBadge() {
  return <div></div>;
}
