import { React, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords don't match");
    }
    console.log(passwordRef.current.value);
    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("failed to create an account");
    }
    setLoading(false);
  };
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" id="email" ref={emailRef} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" id="password" ref={passwordRef} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="passwordConfirmation">Password confirmation</Form.Label>
            <Form.Control type="password" id="passwordConfirmation" ref={passwordConfirmRef} />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit" disabled={loading}>
            Sign up
          </Button>
        </Form>
      </Card.Body>
      <div className="w-100 text-center my-2">
        Alread have an account? <Link to="/login">Login</Link>
      </div>
    </Card>
  );
};

export default Signup;
