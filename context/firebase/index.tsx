import { User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FirebaseContext, UserData, UserModel } from "utils/types/firebase";
import { auth } from "services/firebase";

import {
  login,
  logout,
  signUp,
  updateCredentials,
  updateUser,
} from "services/firebase/auth";
import getUserData from "services/firebase/store/getUserData";
import { setLocal } from "utils/localStorage";

const initial = {
  auth: {
    data: {
      user: null,
      isLoading: true,
    },
    userData: null,
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
  const [userData, setUserData] = useState<UserModel | null>(null);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        getUserData(user.email).then((data) => {
          setUserData(data);
          setLocal("-user-data", data);
        });
      } else {
        setUserData(null);
        setLocal("-user-data", null);
      }

      setData({ user, isLoading: false });
    });
    return () => {
      unsuscribe();
    };
  }, []);

  const value: FirebaseContext = {
    auth: {
      data,
      userData,
      login,
      logout,
      signUp,
      updateCredentials,
      updateUser,
    },
  };

  return (
    <firebaseContext.Provider value={value}>
      {children}
    </firebaseContext.Provider>
  );
}
export default FirebaseProvider;

export function useFirebase() {
  return useContext(firebaseContext);
}
export function useAuth(): FirebaseContext["auth"] {
  return useContext(firebaseContext).auth;
}
