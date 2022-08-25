import { useCallback, useState } from "react";
import getCoursesByIds from "services/firebase/store/getCoursesByIds";
import { getLocal, setLocal } from "utils/localStorage";
import { CourseModel } from "utils/types/firebase";

type Ids = string[];
export const FAVORITES_KEY = "-favorite-courses";
interface Props {
  query?: boolean;
  onClick?: (_?: any) => any;
}
function useFavorites({ onClick }: Props) {
  const [favorites, setFavorites] = useState<CourseModel[]>([]);

  const refetch = useCallback(async () => {
    const ids = getLocal<string[]>(FAVORITES_KEY);
    if (!ids) return setFavorites([]);
    const courses = await getCoursesByIds(ids);
    setFavorites(courses);
  }, []);

  const handleFavorite = (id: string) => {
    const data = getLocal<Ids>(FAVORITES_KEY);
    if (!data) setLocal<Ids>(FAVORITES_KEY, []);
    else if (data.includes(id))
      setLocal<Ids>(
        FAVORITES_KEY,
        data.filter((_id) => _id !== id)
      );
    else setLocal<Ids>(FAVORITES_KEY, [id, ...data]);

    onClick!();
  };

  const isFavorite = (id: string): boolean => {
    const data = getLocal<Ids>(FAVORITES_KEY);
    if (data?.includes(id)) return true;
    return false;
  };

  return { favorites, isFavorite, handleFavorite, refetch };
}

export default useFavorites;
