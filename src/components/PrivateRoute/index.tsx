import { useAuth } from "context/firebase";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";

interface Props {
  children: ReactNode;
  verified?: boolean;
}

function PrivateRoute({ children, verified }: Props) {
  const { data } = useAuth();
  const { user, isLoading } = data;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    if (!user || (verified && !user.emailVerified)) navigate("/");
  }, [user, isLoading, verified, navigate]);

  return <>{children}</>;
}

export default PrivateRoute;
