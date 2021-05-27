import React, { createContext, useState } from "react";

import { loginRequest } from "./authenticationService";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
