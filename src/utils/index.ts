import { NODE_ENV } from "constants/index";

export const imageParse = (img: string) =>
  NODE_ENV !== "development" ? `/${img}` : img;
