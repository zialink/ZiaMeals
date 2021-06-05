import React, { useContext } from "react";

import { Spacer } from "../../../../utils/spacer/Spacer";
import { MenuList } from "../../components/MenuList";
import { RestaurantInfo } from "../../components/RestaurantInfoCard";
import { OrderButton } from "../../components/restaurantStyles";
import { RestaurantDetailsPageStyle } from "./restaurantScreenStyles";

import { CartContext } from "../../../../services/cart/cartContext";

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { addToCart } = useContext(CartContext);

  const { restaurant } = route.params;
  return (
    <RestaurantDetailsPageStyle>
      <RestaurantInfo restaurant={restaurant} />
      <MenuList />
      <Spacer top={20} bottom={25}>
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special only 9.99!
        </OrderButton>
      </Spacer>
    </RestaurantDetailsPageStyle>
  );
};
