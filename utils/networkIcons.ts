import Polygon from "assets/networks/matic.svg";

export type NetworkNames = "polygon";
const networkIcons: { [key in NetworkNames]: { icon: string; color: string } } =
  {
    polygon: {
      icon: Polygon,
      color: "#6F41D8",
    },
  };

export default networkIcons;
