import { useAuth } from "context/firebase";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  verified?: boolean;
}

function PrivateRoute({ children, verified }: Props) {
  const { data } = useAuth();
  const { user, isLoading } = data;
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!user || (verified && !user.emailVerified)) router.push("/");
  }, [user, isLoading, verified, router]);

  return <>{children}</>;
}

export default PrivateRoute;
