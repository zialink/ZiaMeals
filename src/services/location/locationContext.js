import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: 43.653225, lng: -79.383186 });

  const onSearch = (searchWord) => {
    setIsLoading(true);
    locationRequest(searchWord.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
