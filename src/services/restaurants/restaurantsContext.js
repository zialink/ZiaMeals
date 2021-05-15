import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { LocationContext } from "../location/locationContext";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurantsServices";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  [restaurants, setRestaurants] = useState([]);
  [isLoading, setIsLoading] = useState(false);
  [errors, setErrors] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (searchLocation) => {
    setRestaurants([]);
    setIsLoading(true);
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
    }, 500);
  };
  useEffect(() => {
    const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(locationString);
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, errors }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
