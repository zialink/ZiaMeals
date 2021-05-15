import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: 43.653225, lng: -79.383186 });
  const [keyword, setKeyword] = useState("");

  const onPressSearch = (searchValue) => {
    setKeyword(searchValue.toLowerCase());
  };

  const onSearch = (searchWord) => {
    setIsLoading(true);
    locationRequest(searchWord)
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
  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        onPressSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
