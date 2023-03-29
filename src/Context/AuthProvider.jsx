import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  const logout = () => {
    setIsAuthenticate(false);
    setUser({});
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        isAuthenticate,
        setIsAuthenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
