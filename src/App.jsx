import React, { useEffect } from "react";
import {
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
import { AdminPage } from "./pages/AdminPage";
import PrivateRoute from "./PrivateRoute";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboardadmin"
          element={<PrivateRoute element={AdminPage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
