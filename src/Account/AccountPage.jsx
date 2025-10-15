import React from "react";
import { Link } from "react-router";
import { useAuth } from "../Auth/AuthContext";

export default function AccountPage() {
  const { user } = useAuth();
  if (!user)
    return (
      <>
        <h1>Please log in or register </h1>
        <Link to="/login">Go to log in</Link>
        <Link to="/register">Go to register</Link>
      </>
    );
  return (
    <>
      <h1>Welcome {user.firstname} </h1>
      <p>Your email on file with us is {user.email}</p>
      <h2>Your reservations</h2>
      {!user.reservations ? (
        <p>You have these books reserved {user.reservations} </p>
      ) : (
        <p>
          You have not reserved any books yet. Browse
          <Link to="/">our catalog!</Link>
        </p>
      )}
    </>
  );
}
