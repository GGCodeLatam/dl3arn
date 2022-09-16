import { getDownloadURL, ref } from "firebase/storage";
import { CourseModel, ImageType } from "utils/types/firebase";
import { storage } from "..";

export const getImage = async (
  img: CourseModel["image"]
): Promise<CourseModel["image"]> => {
  try {
    if (!img) return null;
    if (typeof img === "string")
      return await getDownloadURL(ref(storage, `images/${img}`));

    if (typeof img === "object" && !Array.isArray(img)) {
      const images: { [key in ImageType]?: string | null } = {};
      await Promise.all(
        Object.entries(img).map(
          async ([key, value]: [string, string | null]) => {
            if (value)
              images[key as ImageType] = await getDownloadURL(
                ref(storage, `images/${value}`)
              );
          }
        )
      );
      return images;
    }

    return null;
  } catch (e) {
    return null;
  }
};
