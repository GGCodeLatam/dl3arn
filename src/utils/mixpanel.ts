import { MIXPANEL_KEY } from "constants/index";
import mixpanel from "mixpanel-browser";

type Params = { [key: string]: any };

const event = (name: string, params?: Params) => {
  try {
    if (!MIXPANEL_KEY) return null;
    mixpanel.init(MIXPANEL_KEY);
    mixpanel.track(name, params);
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (params?: Params) => event("signup", params);
export const login = (params: { email: string }) => event("login", params);
export const logout = (params: { email: string }) => event("logout", params);

interface Props {
  id: string;
  name: string;
}
export const course = ({ id, name }: Props) => event("course", { id, name });
