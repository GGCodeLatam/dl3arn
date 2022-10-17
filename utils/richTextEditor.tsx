import { ReactNode } from "react";

export function isHeader(line: string): boolean {
  return /^#/.test(line);
}

export function getHeader(line: string): ReactNode {
  let num = 1;
  const aux = line.split("#");
  console.log(aux);
  return line;
}
