import { useCallback, useEffect, useState } from "react";
import getCourses from "services/firebase/store/getCourses";
import { CourseModel } from "utils/types/firebase";

interface Data {
  isLoading: boolean;
  courses: CourseModel[];
}
function useCourses() {
  const [data, setData] = useState<Data>({
    isLoading: true,
    courses: [],
  });

  const fetchCourses = useCallback(async () => {
    setData((old) => ({ ...old, data: { courses: [], isLoading: true } }));

    const courses = await getCourses();

    setData((old) => ({
      ...old,
      courses,
      isLoading: false,
    }));
  }, []);

  useEffect(() => {
    fetchCourses();
    return () => {};
  }, [fetchCourses]);

  const refetch = async () => {
    fetchCourses();
  };

  return { data, refetch };
}

export default useCourses;
