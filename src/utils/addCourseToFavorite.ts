import { getLocal, setLocal } from "./localStorage";

const KEY = "-favorite-courses";

function addCourseToFavorite(id: string) {
  const favorites = getLocal<string[]>(KEY) || [];

  if (favorites.includes(id))
    return setLocal(
      KEY,
      favorites.filter((_id: string) => _id !== id)
    );

  return setLocal(KEY, [...favorites, id]);
}

export function isFavorite(id: string): boolean {
  const favorites = getLocal<string[]>(KEY);
  if (!favorites?.includes(id)) return false;
  return true;
}

export default addCourseToFavorite;
