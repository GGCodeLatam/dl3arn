import { useAuth } from "context/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import routes from "utils/routes";

function useRedirectOnAuthenticated() {
  const navigate = useNavigate();
  const {
    data: { user, isLoading },
  } = useAuth();

  useEffect(() => {
    if (!isLoading && user) navigate(routes.home.path);
  }, [navigate, isLoading, user]);

  return isLoading;
}

export default useRedirectOnAuthenticated;
