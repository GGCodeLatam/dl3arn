import { NextPageContext } from "next";
import { Override } from "./utility";

export type NextContext<T> = Override<NextPageContext, T>;
