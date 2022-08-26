import { useAuth } from "context/firebase";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

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
    if (!user) router.replace("/");
  }, [user, isLoading, verified, router]);

  return <>{children}</>;
}

export default PrivateRoute;
