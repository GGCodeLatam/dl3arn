import { useAuth } from "context/firebase";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import routes from "utils/routes";

interface Props {
  children: ReactNode;
  verified?: boolean;
}

function PrivateRoute({ children, verified }: Props) {
  const router = useRouter();
  const { data } = useAuth();
  const { user, isLoading } = data;

  useEffect(() => {
    if (isLoading) return;
    if (!user) router.push(routes.login.path);
  }, [user, isLoading, verified, router]);

  return <>{!isLoading && user && children}</>;
}

export default PrivateRoute;
