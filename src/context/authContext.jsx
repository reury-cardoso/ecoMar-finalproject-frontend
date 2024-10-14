/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const decodeToken = (token) => {
  const payload = token.split('.')[1];
  const decoded = atob(payload);
  return JSON.parse(decoded);
}

const handleTokenExpiration = (setToken, setIsLogged) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('name');
  setToken(null);
  setIsLogged(false);
  window.location.reload();
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const decoded = decodeToken(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        handleTokenExpiration(setToken, setIsLogged);
        setLoading(false);
      } else {
        setIsLogged(true);
        setIsAdmin(decoded.user_type === 'admin');
        setLoading(false);

        const expirationTimeout = (decoded.exp - now) * 1000;
        const timeoutId = setTimeout(() => {
          handleTokenExpiration(setToken, setIsLogged);
        }, expirationTimeout);

        return () => clearTimeout(timeoutId); 
      }
    } else {
      setLoading(false);
    }
  }, [token, isLogged]);

  return (
    <AuthContext.Provider value={{ token, setToken, isAdmin, setIsAdmin, isLogged, setIsLogged, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
