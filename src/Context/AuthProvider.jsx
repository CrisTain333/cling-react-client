import { useEffect } from "react";
import { createContext, useState } from "react";
import { BACKEND_BASE_URL } from "../config/const";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const tokenStoragePath = "accessToken";
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const refresh = () => {
    setShouldRefresh(!shouldRefresh);
  };

  const logout = () => {
    setIsAuthenticate(false);
    setUser(null);
    localStorage.removeItem("accessToken");
    refresh();
  };

  useEffect(() => {
    const token = localStorage.getItem(tokenStoragePath);
    if (token) {
      getUserData(token);
    }
  }, [shouldRefresh]);

  const getUserData = async (token) => {
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/api/v1/user/me`, {
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
      });
      const userInfo = await res.json();
      setUser(userInfo?.data);
      setIsAdmin(userInfo?.data?.role === "admin");
    } catch (error) {
      setIsError(true);
      setUser(null);
      setIsLoading(false);
      logout();
    }
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
        isError,
        refresh,
        isAdmin,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
