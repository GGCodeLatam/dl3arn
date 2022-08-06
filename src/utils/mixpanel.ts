import { MIXPANEL_KEY } from "@/constants/index";
import mixpanel from "mixpanel-browser";

const event = (name: string, params?: { [key: string]: any }) => {
  try {
    if (!MIXPANEL_KEY) return null;
    mixpanel.init(MIXPANEL_KEY);
    mixpanel.track(name, params);
  } catch (e) {
    console.log(e);
  }
};

export const signUp = () => event("signup");
export const login = () => event("login");

interface Props {
  id: string;
  name: string;
}
export const course = ({ id, name }: Props) => event("course", { id, name });
