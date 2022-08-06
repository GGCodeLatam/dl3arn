import { MIXPANEL_KEY, NODE_ENV } from "@/constants/index";
import mixpanel from "mixpanel-browser";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { login, signUp, course } from "utils/mixpanel";

interface Context {
  [key: string]: (_?: any) => any;
}
const context = createContext<Context>({});

interface Props {
  children: ReactNode;
}
function MixpanelProvider({ children }: Props) {
  useEffect(() => {
    if (!MIXPANEL_KEY) return () => {};
    mixpanel.init(
      MIXPANEL_KEY,
      { debug: NODE_ENV === "development" },
      "dl3arn"
    );
  }, []);

  const value = {
    signUp,
    login,
    course,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default MixpanelProvider;

export const useMixpanel = () => {
  return useContext(context);
};
