import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

try {
  admin.initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CONFIG as string)),
  });
} catch (e) {}

interface Props {
  token?: string;
  verified?: boolean;
}
async function authenticated({ token, verified }: Props) {
  try {
    const user = await admin.auth().verifyIdToken(token || "");
    if (verified && !!user && user.email_verified) return true;
    if (!verified && !!user) return true;
    return false;
  } catch (e) {
    return false;
  }
}

export default authenticated;
