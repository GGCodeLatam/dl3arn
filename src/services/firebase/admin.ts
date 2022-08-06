import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import Credentials from "./firebase_admin.json";

try {
  admin.initializeApp({
    credential: admin.credential.cert(Credentials as ServiceAccount),
  });
} catch (e) {}

export const auth = admin.auth();
export const db = admin.firestore();
