import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "services/firebase";
import ErrorMessages from "utils/ErrorsMessages";
import { Login } from "utils/types/firebase";
import { login as mixpanelLogin } from "utils/mixpanel";

export const login: Login = async ({ email, password }, provider = "email") => {
  try {
    const providers = {
      email: async () =>
        email && password
          ? await signInWithEmailAndPassword(auth, email, password)
          : null,
      google: async () => await signInWithPopup(auth, googleProvider),
    };

    const handler = providers[provider];
    const data = await handler();

    if (!data) return { error: null, user: null };

    mixpanelLogin({ email: data.user.email || "" });

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
