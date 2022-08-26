import { auth } from "services/firebase";
import { logout as mixpanelLogout } from "utils/mixpanel";

export const logout = () => {
  const email = auth.currentUser?.email || "";
  mixpanelLogout({ email });
  auth.signOut();
};
