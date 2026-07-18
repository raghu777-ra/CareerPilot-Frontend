import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    userId: localStorage.getItem("userId"),
    fullName: localStorage.getItem("fullName"),
    email: localStorage.getItem("email")
  });

  const login = (user) => {

    localStorage.setItem("token", user.token);
    localStorage.setItem("role", user.role);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("fullName", user.fullName);
    localStorage.setItem("email", user.email);

    setAuth({
      token: user.token,
      role: user.role,
      userId: user.id,
      fullName: user.fullName,
      email: user.email
    });

  };

  const logout = () => {

    localStorage.clear();

    setAuth({
      token: null,
      role: null,
      userId: null,
      fullName: null,
      email: null
    });

  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() {
  return useContext(AuthContext);
}