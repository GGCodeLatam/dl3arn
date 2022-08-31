import Image from "next/image";
import networkIcons, { NetworkNames } from "utils/networkIcons";
import { Badge } from "./Badges.styles";

interface Props {
  network?: string;
  onlyIcon?: boolean;
  dark?: boolean;
  width?: string;
  height?: string;
  toRight?: boolean;
  className?: string;
  size?: string | number;
}
export function NetworkBadge({
  width,
  height,
  network,
  toRight,
  onlyIcon,
  size,
  ...styled
}: Props) {
  if (!network) return null;
  const obj = networkIcons[network as NetworkNames];
  return (
    <Badge size={size} width={width} height={height} {...styled}>
      {!onlyIcon && !toRight && <p>{network}</p>}
      {obj?.icon && (
        <div className="img-container">
          <Image layout="fill" src={obj.icon} alt={network} />
        </div>
      )}
      {!onlyIcon && toRight && <p>{network}</p>}
    </Badge>
  );
}

export function Dl3arnBadge() {
  return <div></div>;
}
