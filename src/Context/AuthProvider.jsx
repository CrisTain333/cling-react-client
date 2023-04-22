import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    setIsAuthenticate(false);
    setUser({});
    localStorage.removeItem("accessToken");
    // window.location.reload();
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
