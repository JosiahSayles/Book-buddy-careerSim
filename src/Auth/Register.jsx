import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "./AuthContext";

function Register() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const register = useAuth();

  const tryRegister = async (formData) => {
    setError(null);

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await register({ firstname, lastname, email, password });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          First Name
          <input type="text" name="firstname" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastname" />
        </label>
        <label>
          Email
          <input type="text" name="email" required />
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
