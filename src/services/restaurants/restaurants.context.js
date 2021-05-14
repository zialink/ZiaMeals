import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  [restaurants, setRestaurants] = useState([]);
  [isLoading, setIsLoading] = useState(false);
  [errors, setErrors] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrors(error);
        });
    }, 1000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, errors }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
