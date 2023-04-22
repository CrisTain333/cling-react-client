import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const tokenStoragePath = "accessToken";
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [isError, setIsError] = useState(false);

  const logout = () => {
    setIsAuthenticate(false);
    setUser({});
    localStorage.removeItem("accessToken");
    // window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem(tokenStoragePath);
    if (token) {
      getUserData(token);
    }
  }, []);

  const getUserData = async (token) => {
    try {
      const res = await fetch(
        "https://cling-task-server.onrender.com/api/v1/user/me",
        {
          headers: {
            "content-type": "application/json",
            Authorization: token,
          },
        }
      );
      const userInfo = await res.json();
      setUser(userInfo?.data);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
