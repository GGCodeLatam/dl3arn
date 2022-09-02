import { useAuth } from "context/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";

function useRedirectOnAuthenticated() {
  const router = useRouter();
  const {
    data: { user, isLoading },
  } = useAuth();

  useEffect(() => {
    if (!isLoading && user) router.back();
  }, [router, isLoading, user]);

  return { user, isLoading };
}

export default useRedirectOnAuthenticated;
