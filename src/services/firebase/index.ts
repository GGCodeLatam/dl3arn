import { deleteCookie, setCookie } from "cookies-next";
import {
  FirebaseApp,
  FirebaseOptions,
  getApp,
  getApps,
  initializeApp,
} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config: FirebaseOptions = {
  appId: "1:896212070319:web:fb0f83cfd29b0ddcbdc95a",
  apiKey: "AIzaSyBSy-vLLlri3-rPXqZGaeZnfKjtS3pzhYo",
  authDomain: "dev-dl3arn.firebaseapp.com",

  projectId: "dev-dl3arn",
  storageBucket: "dev-dl3arn.appspot.com",
  messagingSenderId: "896212070319",

  databaseURL: "https://dev-dl3arn.firebaseio.com",
};

const NAME = "app";

const app: FirebaseApp = !getApps().length
  ? initializeApp(config, NAME)
  : getApp(NAME);

export const auth = getAuth(app);
auth.onIdTokenChanged(async (user) => {
  if (!user) return deleteCookie("token");
  return setCookie("token", await user.getIdToken());
});
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export default app;
