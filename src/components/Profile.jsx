import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  console.log({ currentUser });

  const handleLogout = () => {
    navigate("/login");

    // setError("");
    // try {
    //   // await logout();
    //   navigate("/login");
    // } catch {
    //   setError("Logout failed!");
    // }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {/* <p>
          <strong>Welcome {currentUser?.email}</strong>
        </p> */}
          <p>Email: {currentUser?.email}</p>
          <Link to="/update-profile">Update profile</Link>
        </Card.Body>
      </Card>
      <div>
        <Button onClick={handleLogout} className="btn btn-primary mt-3">
          Logout
        </Button>
      </div>
    </>
  );
};

export default Profile;
