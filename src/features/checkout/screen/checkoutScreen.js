import React, { useContext } from "react";
import { Platform, UIManager } from "react-native";

import { CreditCardInput } from "../components/CreditCardInput";
import { SafeView } from "../../../utils/safeView/SafeView";
import { Text } from "../../../utils/typography/Text";
import { CartIconContainer, CartIcon } from "../checkoutStyles";

import { CartContext } from "../../../services/cart/cartContext";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  return (
    <SafeView>
      {!cart.length ? (
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      ) : (
        <>
          <Text>{JSON.stringify(cart)}</Text>
          <Text>{JSON.stringify(restaurant)}</Text>
          <CreditCardInput />
        </>
      )}
    </SafeView>
  );
};
