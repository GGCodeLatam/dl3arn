import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "constants/index";
import { setCookie, deleteCookie } from "cookies-next";

const config: FirebaseOptions = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const NAME = "app";

const app: FirebaseApp = initializeApp(config, NAME);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

auth.onIdTokenChanged(async (user) => {
  if (!user) return deleteCookie("__user_token");
  return setCookie("__user_token", await user.getIdToken(), {
    path: "/",
    sameSite: true,
  });
});

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();

export default app;
