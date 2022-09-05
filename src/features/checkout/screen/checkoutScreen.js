import React, { useContext, useState } from "react";
import { Platform, ScrollView, UIManager } from "react-native";
import { List } from "react-native-paper";

import { CreditCardInput } from "../components/CreditCardInput";
import { SafeView } from "../../../utils/safeView/SafeView";
import { Text } from "../../../utils/typography/Text";
import { Spacer } from "../../../utils/spacer/Spacer";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../checkoutStyles";

import { CartContext } from "../../../services/cart/cartContext";
import { RestaurantInfo } from "../../restaurants/components/RestaurantInfoCard";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  return (
    <SafeView>
      {!cart.length ? (
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      ) : (
        <>
          <RestaurantInfo restaurant={restaurant} />
          <ScrollView>
            <Spacer left={8}>
              <Text variant="label">Your Order</Text>
            </Spacer>
            <Spacer top={8} left={8}>
              <List.Section>
                {cart.map(({ item, price, id }) => {
                  return (
                    <List.Item key={id} title={`${item} - ${price / 100}`} />
                  );
                })}
              </List.Section>
            </Spacer>
            <Spacer left={16} bottom={32}>
              <Text>Total: {sum}</Text>
            </Spacer>
            <NameInput
              label="Card Name"
              value={name}
              autoCapitalize="none"
              onChangeText={(nameInput) => {
                setName(nameInput);
              }}
            />
            <Spacer left={4} top={8} right={8}>
              {name.length > 0 && <CreditCardInput name={name} />}
            </Spacer>

            <Spacer top={24} bottom={16}>
              <PayButton
                mode="contained"
                icon="cash-usd"
                onPress={() => console.log("success")}
              >
                Pay
              </PayButton>
              <ClearButton
                mode="contained"
                icon="cart-off"
                onPress={() => clearCart()}
              >
                Clear Cart
              </ClearButton>
            </Spacer>
          </ScrollView>
        </>
      )}
    </SafeView>
  );
};
