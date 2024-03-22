import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context to hold authentication-related data
export const AuthContext = createContext();

// Authentication context provider component
export const AuthContextProvider = ({ children }) => {
  // State to hold the current user, initialized from local storage
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Function to handle user login
  const login = async (inputs) => {
    try {
      const res = await axios.post("/auth/login", inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      await axios.post("/auth/logout");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Update local storage whenever the currentUser state changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Provide the AuthContext to the components within its scope
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
