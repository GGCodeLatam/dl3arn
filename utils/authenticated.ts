import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

try {
  admin.initializeApp({
    credential: cert({
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
  });
} catch (e) {
  console.error(e);
}

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
    console.error(e);
    return false;
  }
}

export default authenticated;
