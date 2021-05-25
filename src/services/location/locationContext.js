import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const onSearch = (searchWord) => {
    setIsLoading(true);
    setKeyword(searchWord);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    setIsLoading(true);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        onSearch,
        error,
        keyword,
        location,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
