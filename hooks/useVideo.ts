import { useEffect, useState } from "react";
import getVideo from "services/firebase/store/getVideo";
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
  video: Partial<APIGetVideoById>;
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
    getVideo(id).then((video) => {
      if (video) return setData({ ...empty, video });
    });
  }, [locked, id, free]);

  return data;
}

export default useVideo;
