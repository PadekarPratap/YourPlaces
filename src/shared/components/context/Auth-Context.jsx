import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

let logoutTimer;

const AuthProvider = ({ children }) => {
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const [userToken, setUserToken] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData && new Date(savedData.expiration) > new Date()) {
      return savedData.token;
    }
    return null;
  });

  const [userId, setUserId] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData && new Date(savedData.expiration) > new Date()) {
      return savedData.userId;
    }
    return null;
  });

  const login = (userId, token) => {
    setUserToken(token);
    setUserId(userId);
    const expirationDate = new Date(new Date().getTime() + 1000 * 60 * 60); // 1 hr token expiration as set on the backend
    setTokenExpirationDate(expirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId,
        token,
        expiration: expirationDate.toISOString(),
      })
    );
  };

  const logout = () => {
    setUserToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  };

  // timer to auto logout after 1 hr
  useEffect(() => {
    if (userToken && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        logout();
        toast.error("Your session has expired! Plese log in again");
      }, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userToken, tokenExpirationDate]);

  return (
    <AuthContext.Provider value={{ userId, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
