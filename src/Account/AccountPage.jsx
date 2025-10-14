import React from "react";
import { Link } from "react-router";

export default function AccountPage() {
  return (
    <>
      <h1>Welcome {firstname} </h1>
      <p>Your email on file with us is {email}</p>
      <h2>Your reservations</h2>
      <p>
        You have not reserved any books yet. Browse
        <Link to="/">our catalog!</Link>
      </p>
    </>
  );
}
