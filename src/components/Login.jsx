import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">Login</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" id="email" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" id="password" />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit">
            Login
          </Button>
        </Form>
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
