import { Route, Routes } from "react-router";

import Home from "pages";
import Dashboard from "pages/dashboard";
import Course from "pages/course/[id]";
import Profile from "pages/profile";

import Login from "pages/auth/login";
import Signup from "pages/auth/signup";
import ChangePassword from "pages/auth/change/password";

import FullPage from "styles/FullContainer";

function App() {
  return (
    <FullPage>
      <Routes>
        <Route path="/" element={<Home />} />
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
