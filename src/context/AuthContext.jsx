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

  // Delete User logic
  const deleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers); // Update state
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Sync with localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers, // Exposing setUsers for flexibility
        currentUser,
        login,
        logout,
        signup,
        deleteUser, // Provide deleteUser function for AdminPage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);
