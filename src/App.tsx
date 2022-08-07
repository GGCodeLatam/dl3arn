import { Route, Routes } from "react-router";

import Home from "pages";
import Dashboard from "pages/dashboard";
import Course from "pages/course/[id]";
import Profile from "pages/profile";
import FullPage from "styles/FullContainer";

function App() {
  return (
    <FullPage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </FullPage>
  );
}

export default App;
