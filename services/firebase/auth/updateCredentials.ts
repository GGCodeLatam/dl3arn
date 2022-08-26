import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "services/firebase";
import {
  GetEmailCredentials,
  Reauthenticate,
  UpdateCredentials,
} from "utils/types/firebase";

const getUserCredential: GetEmailCredentials = (email, password) =>
  EmailAuthProvider.credential(email, password);

const reauthenticateUser: Reauthenticate = async (credential) => {
  if (!auth.currentUser) return null;
  return await reauthenticateWithCredential(auth.currentUser, credential);
};

export const updateCredentials: UpdateCredentials = async (
  password,
  credentials
) => {
  if (!auth?.currentUser?.email) return;

  const { email, password: new_password } = credentials;
  if (!email && !new_password) return;

  const credential = getUserCredential(auth.currentUser.email, password);
  const res = await reauthenticateUser(credential);
  if (!res) return;

  const updates = [];
  if (email) {
    updates.push(updateEmail(auth.currentUser, email));
  }
  if (new_password) {
    updates.push(updatePassword(auth.currentUser, new_password));
  }

  await Promise.all(updates);
  sendEmailVerification(auth.currentUser);
};
