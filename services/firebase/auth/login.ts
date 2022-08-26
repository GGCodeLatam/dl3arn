import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "services/firebase";
import ErrorMessages from "utils/ErrorsMessages";
import { Login } from "utils/types/firebase";
import { login as mixpanelLogin } from "utils/mixpanel";

export const login: Login = async ({ email, password }, provider = "email") => {
  try {
    const providers: { [key: string]: any } = {
      email: async () =>
        email && password
          ? await signInWithEmailAndPassword(auth, email, password)
          : null,

      facebook: async () => signInWithPopup(auth, facebookProvider),
      twitter: async () => signInWithPopup(auth, twitterProvider),
      google: async () => await signInWithPopup(auth, googleProvider),
    };

    const handler = providers[provider];
    const data = await handler();

    if (!data || !data.user) return { error: null, user: null };

    mixpanelLogin({ email: data.user.email });

    return { error: null, user: data };
  } catch (e: any) {
    const { code } = e as { code: string };
    const message = ErrorMessages[code] || "Something went wrong";

    console.log(e);

    return {
      error: { code, message },
      user: null,
    };
  }
};
