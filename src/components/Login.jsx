import { React, useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import {auth}

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const redirectPath = location.state?.path || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: true });
    } catch {
      setError("failed to login");
    }
    setLoading(false);
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate(redirectPath, { replace: true });
    } catch {
      setError("failed to login");
    }
    setLoading(false);
  };

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" id="email" ref={emailRef} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" id="password" ref={passwordRef} />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit" disabled={loading}>
            Login
          </Button>
        </Form>
        <Button
          className="mt-2"
          variant="primary"
          onClick={handleLoginWithGoogle}
          disabled={loading}
        >
          Login with Google
        </Button>
        <div className="w-100 text-center my-2">
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </Card.Body>
      <div className="w-100 text-center my-2">
        need an account? <Link to="/signup">Sign up</Link>
      </div>
    </Card>
  );
};

export default Login;
