import { ChangeEvent, HTMLProps, ReactNode } from "react";

export type InputChange = ChangeEvent<HTMLInputElement>;

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  label?: ReactNode;
}

export interface Inputs {
  [key: string]: { value: string; inputProps?: InputProps };
}
