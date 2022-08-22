import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";

import Home from "pages";
import Roadmap from "pages/roadmap";
import QuienesSomos from "pages/quienes-somos";

import Dashboard from "pages/dashboard";
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
      user &&
      user.emailVerified &&
      ["/", "/quienes-somos", "/roadmap"].includes(location.pathname)
    )
      navigate(to || "/dashboard", { replace: true });
  }, [user, navigate, location, to]);

  return (
    <FullPage>
      {verify && (
        <EmailVerify>Para ver los cursos verifica tu correo.</EmailVerify>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/change/password" element={<ChangePassword />} />

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </FullPage>
  );
}

export default App;
