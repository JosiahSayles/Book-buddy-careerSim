import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const API = import.meta.env.VITE_API;
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
