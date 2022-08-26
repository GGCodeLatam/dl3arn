export function getLocal<T = any>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
}
export function setLocal<T = any>(key: string, value: T): T | null {
  localStorage.setItem(key, JSON.stringify(value));
  return getLocal(key);
}
export function removeLocal<T = any>(key: string): T | null {
  const old = getLocal(key);
  localStorage.removeItem(key);
  return old;
}
