import { useAuth } from "context/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import routes from "utils/routes";

function useRedirectOnAuthenticated() {
  const router = useRouter();
  const {
    data: { user, isLoading },
  } = useAuth();

  useEffect(() => {
    if (!isLoading && user) router.replace(routes.home.path);
  }, [router, isLoading, user]);

  return isLoading;
}

export default useRedirectOnAuthenticated;
