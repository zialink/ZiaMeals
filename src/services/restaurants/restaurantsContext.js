import React, { useState, createContext, useContext, useEffect } from "react";
import { LocationContext } from "../location/locationContext";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurantsServices";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (searchLocation) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(searchLocation)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrors(error);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      retrieveRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, errors }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
