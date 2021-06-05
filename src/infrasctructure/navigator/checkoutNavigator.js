import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CheckoutScreen } from "../../features/checkout/screen/checkoutScreen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    </CheckoutStack.Navigator>
  );
};
