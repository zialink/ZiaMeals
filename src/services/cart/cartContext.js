import React, { useState, useEffect, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authenticationContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [sum, setSum] = useState(0);
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
    } else {
      const newSum = cart.reduce((acc, { price }) => {
        return (acc += price);
      }, 0);
      setSum(newSum / 100);
    }
  }, [cart]);

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
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
