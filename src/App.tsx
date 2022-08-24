import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";

import Landing from "pages";
import Roadmap from "pages/roadmap";
import QuienesSomos from "pages/quienes-somos";

import Home from "pages/home";
import Course from "pages/course/[id]";
import Profile from "pages/profile";

import Login from "pages/auth/login";
import Signup from "pages/auth/signup";
import ChangePassword from "pages/auth/change/password";

import FullPage from "styles/FullContainer";
import { useSearchParams } from "react-router-dom";
import useChat from "hooks/useChat";
import { HUBSPOT } from "constants/index";
import { EmailVerify } from "styles/alerts.styles";
import { useAuth } from "context/firebase";
import routes from "utils/routes";

function App() {
  useChat({ url: HUBSPOT });

  const [params] = useSearchParams();
  const to = params.get("to");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (to) navigate(to, { replace: true });
  }, [to, navigate]);

  const {
    data: { user, isLoading },
  } = useAuth();

  const [verify, setVerify] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading && user && !user.emailVerified) {
      setVerify(true);
    }
  }, [user, isLoading]);

  useEffect(() => {
    if (
      user?.emailVerified &&
      [routes.landing.path, routes.quienes.path, routes.roadmap.path].includes(
        location.pathname
      )
    )
      navigate(to || routes.home.path, { replace: true });
  }, [user, navigate, location, to]);

  return (
    <FullPage>
      {verify && (
        <EmailVerify>Para ver los cursos verifica tu correo.</EmailVerify>
      )}

      <Routes>
        {Object.values(routes).map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </FullPage>
  );
}

export default App;
