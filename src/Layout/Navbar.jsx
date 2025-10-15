import { NavLink } from "react-router";
import { useAuth } from "../Auth/AuthContext";

export default function Navbar() {
  const { logout, token } = useAuth();
  return (
    <header>
      <NavLink to="/" className="navbar">
        <img src="/books.png" alt="Book Buddy Logo" width={20} />
        <p>Book Buddy</p>
      </NavLink>
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
