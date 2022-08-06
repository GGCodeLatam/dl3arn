import { User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FirebaseContext, UserData } from "utils/types/firebase";
import { auth } from "services/firebase";

import {
  login,
  logout,
  signUp,
  updateCredentials,
  updateUser,
} from "services/firebase/auth";
import { removeCookies, setCookie } from "cookies-next";

const initial = {
  auth: {
    data: {
      user: null,
      isLoading: true,
    },
    logout,
    signUp,
    login,
    updateCredentials,
    updateUser,
  },
};

const firebaseContext = createContext<FirebaseContext>(initial);

interface Props {
  children: ReactNode;
}
function FirebaseProvider({ children }: Props) {
  const [data, setData] = useState<UserData>(initial.auth.data);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          setCookie("token", idToken, { sameSite: true });
        });
      } else removeCookies("token");
      setData({ user, isLoading: false });
    });
    return unsuscribe;
  }, []);

  const value: FirebaseContext = {
    auth: {
      data,
      login,
      logout,
      signUp,
      updateCredentials,
      updateUser,
    },
  };

  return (
    <firebaseContext.Provider value={value}>
      {!data.isLoading && children}
    </firebaseContext.Provider>
  );
}
export default FirebaseProvider;

export function useFirebase() {
  return useContext(firebaseContext);
}
export function useAuth() {
  return useContext(firebaseContext).auth;
}
