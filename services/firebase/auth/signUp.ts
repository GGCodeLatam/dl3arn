import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { signUp as mixpanelSignUp } from "utils/mixpanel";

import { auth } from "services/firebase";
import ErrorMessages from "utils/ErrorsMessages";

import { EmailRegister } from "utils/types/firebase";
import axios from "axios";

export const signUp: EmailRegister = async ({ email, password }) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    if (!auth.currentUser || !data)
      return {
        error: { message: "Something went wrong.", code: "" },
        user: null,
      };
    await sendEmailVerification(auth.currentUser);

    mixpanelSignUp();
    await axios.post("/api/mailchimp/add", {
      email: auth.currentUser?.email,
      displayName: auth.currentUser?.displayName,
    });

    return { error: null, user: data };
  } catch (e: any) {
    const { code } = e as { code: string };
    return { error: { message: ErrorMessages[code], code }, user: null };
  }
};
