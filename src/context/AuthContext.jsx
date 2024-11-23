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
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
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
    // Check if a user with the same email already exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const exists = storedUsers.some((u) => u.email === user.email);
    if (exists) {
      return false; // Email already exists
    }

    // Ensure role is always defined (default to 'reader' if not provided)
    const newUser = {
      ...user,
      role: user.role || "reader",
    };

    // Add the new user to the local storage users array
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // Set the users state in React (this ensures we keep the state in sync)
    setUsers(storedUsers);

    // Attempt to log in the new user after signup
    const loginSuccess = login(newUser.email, newUser.password);
    return loginSuccess; // Return true if login is successful, false otherwise
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);
