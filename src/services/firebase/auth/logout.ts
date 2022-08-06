import { auth } from "services/firebase";

export const logout = () => {
  auth.signOut();
};
