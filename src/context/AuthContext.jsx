import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  // Login logic
  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  // Logout logic
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  // Signup logic
  const signup = (user) => {
    // Check if a user with the same email already exists
    const exists = users.some((u) => u.email === user.email);
    if (exists) {
      return false; // Email already exists
    }

    // Ensure role is always defined
    const newUser = {
      ...user,
      role: user.role || "reader", // Default to 'reader' role if not provided
    };

    // Add the new user and save to local storage
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return true;
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);
