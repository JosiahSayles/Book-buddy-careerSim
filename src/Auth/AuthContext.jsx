import { createContext, useState, useContext } from "react";

const API = import.meta.env.VITE_API;
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const register = async (credentials) => {
    const res = await fetch(API + "/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await res.json();
    if (!res.ok) {
      throw Erorr(result.message);
    }
    setToken(result.token);
    setUser(result.user);
  };

  const login = async (credentials) => {
    const res = await fetch(API + "/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await res.json();
    if (!res.ok) {
      throw Erorr(result.message);
    }
    setToken(result.token);
    setUser(result.user);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const value = {
    token,
    user,
    login,
    register,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
