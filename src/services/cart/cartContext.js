import React, { useState, useEffect, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authenticationContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
