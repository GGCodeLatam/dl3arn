import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { signUp as mixpanelSignUp } from "utils/mixpanel";

import { auth } from "services/firebase";
import ErrorMessages from "utils/ErrorsMessages";

import { EmailRegister } from "utils/types/firebase";

export const signUp: EmailRegister = async ({ email, password }) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
    if (!auth.currentUser || !data)
      return {
        error: { message: "Something went wrong.", code: "" },
        user: null,
      };
    await sendEmailVerification(auth.currentUser);

    mixpanelSignUp();

    return { error: null, user: data };
  } catch (e: any) {
    const { code } = e as { code: string };
    return { error: { message: ErrorMessages[code], code }, user: null };
  }
};
