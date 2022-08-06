import { NextApiRequest, NextApiResponse } from "next";
import { Override } from "./utility";

/**
 *
 * Error codes for API responses
 *
 */
export enum API_ERRORS {
  COURSE_NOT_FOUND = "COURSE_NOT_FOUND",
  VIDEO_NOT_FOUND = "VIDEO_NOT_FOUND",
  BUY_NFT = "BUY_NFT",
}

/**
 *
 * API Response error object
 *
 */
export interface APIError {
  message: string;
  code: API_ERRORS;
}

/**
 *
 * Response of Next API endpoints
 *
 */
export interface APIResponse<T = null> {
  error: APIError | null;
  data: T;
  success: boolean;
}

/**
 *
 * Overrides properties of T in NextApiRequest
 *
 */
export type Request<T> = Override<NextApiRequest, T>;

/**
 *
 * Typed JSON Response
 *
 */
export type Response<T> = NextApiResponse<APIResponse<Partial<T>>>;

/**
 *
 * API Handler function
 *
 * @type {Req} - Overrides properties of NextApiRequest
 * @type {Res} - Typed JSON response
 *
 * @returns *
 *
 */
export type APIHandler<Req, Res> = (
  req: Request<Req>,
  res: Response<Res>
) => Promise<any>;
