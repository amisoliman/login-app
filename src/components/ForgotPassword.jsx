import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center">Reset password</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" id="email" />
          </Form.Group>

          <Button className="mt-2" variant="primary" type="submit">
            Reset password
          </Button>
        </Form>
        <div className="w-100 text-center my-2">
          <Link to="/login">login</Link>
        </div>
      </Card.Body>
      <div className="w-100 text-center my-2">
        need an account? <Link to="/signup">Sign up</Link>
      </div>
    </Card>
  );
};

export default ForgotPassword;
