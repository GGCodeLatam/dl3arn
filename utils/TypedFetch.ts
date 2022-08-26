import { APIResponse } from "./types/api";

async function TypedFetch<T>(
  path: RequestInfo | URL,
  options?: RequestInit
): Promise<APIResponse<T>> {
  return fetch(path, options).then((res) => res.json());
}

export default TypedFetch;
