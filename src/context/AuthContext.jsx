// React Imports
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  // Login 
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

  // Logout 
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  // Signup 
  const signup = (user) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const exists = storedUsers.some((u) => u.email === user.email);
    if (exists) {
      return false; // Email already exists
    }

    const newUser = {
      ...user,
      role: user.role || "reader",
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    setUsers(storedUsers);

    const loginSuccess = login(newUser.email, newUser.password);
    return loginSuccess;
  };

  // Delete User 
  const deleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        login,
        logout,
        signup,
        deleteUser, // deleteUser function for AdminPage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);
