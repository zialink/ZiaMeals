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

  const {
    location: { lat, lng },
  } = useContext(LocationContext);

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
    }, 500);
  };
  useEffect(() => {
    retrieveRestaurants(`${lat},${lng}`);
  }, [lat, lng]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, errors }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
