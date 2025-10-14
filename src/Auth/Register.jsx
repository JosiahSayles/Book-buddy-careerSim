import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "./AuthContext";

function Register() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const register = useAuth();

  const tryRegister = async (formData) => {
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>Register for an account</h1>
      <form>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="text" name="password" required />
        </label>
        <button>Register</button>
        {error && <p role="alert">{error}</p>}
      </form>
      <Link to={"/login"}>Already have an account? Log in here.</Link>
    </>
  );
}

export default Register;
