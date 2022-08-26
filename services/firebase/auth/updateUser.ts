import { updateProfile } from "firebase/auth";
import { auth } from "services/firebase";
import { UpdateUser } from "utils/types/firebase";

export const updateUser: UpdateUser = async (data) => {
  if (!auth.currentUser?.email) return null;
  return await updateProfile(auth.currentUser, data);
};
