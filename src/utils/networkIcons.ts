import Polygon from "assets/networks/matic.svg";
import { imageParse } from "utils";

const networkIcons: { [key: string]: { icon: string; color: string } } = {
  polygon: {
    icon: imageParse(Polygon),
    color: "#6F41D8",
  },
};

export default networkIcons;
