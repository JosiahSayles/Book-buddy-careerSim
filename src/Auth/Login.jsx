import React from "react";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router";

function Login() {
  const [error, setError] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();

  const tryLogin = async (formData) => {
    setError(null);

    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form action={tryLogin}>
        <label>
          <input type="text" name="email" required />
        </label>
        <label>
          <input type="text" name="password" required />
        </label>
        <button>Log in </button>
        {error && <p role="alert">{error}</p>}
      </form>
      <Link to={"/register"}>Need an Account? Register here!</Link>
    </>
  );
}

export default Login;
