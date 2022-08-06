import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetVideoById } from "utils/types/video";

interface Params {
  video: {
    id: string;
    free: boolean;
  };
  locked: boolean;
}

interface Data {
  error: { message: string } | null;
  isLoading: boolean;
  video: APIGetVideoById;
}

const empty: Data = {
  error: null,
  isLoading: false,
  video: null,
};
const initial: Data = {
  error: null,
  isLoading: true,
  video: null,
};
function useVideo({ video: { id, free }, locked }: Params) {
  const [data, setData] = useState<Data>(initial);

  useEffect(() => {
    if (!id) return setData(empty);
    if (!free && locked) return setData(empty);

    setData(initial);
    TypedFetch<APIGetVideoById>(`/api/videos/${id}`)
      .then(({ data: video, error }) => {
        if (error) throw error;
        setData({ ...empty, video });
      })
      .catch((error) => error && setData({ ...empty, error }));
  }, [locked, id, free]);

  return data;
}

export default useVideo;
