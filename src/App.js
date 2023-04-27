import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Profile from "./components/Profile";
import LoadingPage from "./components/LoadingPage";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<LoadingPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </Container>
  );
};

export default App;
