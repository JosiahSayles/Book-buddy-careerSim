import { NavLink } from "react-router";
import { useAuth } from "../Auth/AuthContext";

export default function Navbar() {
  const { logout, token } = useAuth();
  return (
    <header>
      <p>Book Buddy</p>
      <nav>
        <NavLink to="/">Books</NavLink>
        {token ? (
          <>
            <NavLink to="/account">Account</NavLink>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
    </header>
  );
}
