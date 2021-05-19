import React from "react";
import { MenuList } from "../../../../infrasctructure/MenuList";

import { RestaurantInfo } from "../../components/RestaurantInfoCard";
import { SafeView, RestaurantDetailsPageStyle } from "./restaurantScreenStyles";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeView>
      <RestaurantDetailsPageStyle>
        <RestaurantInfo restaurant={restaurant} />
      </RestaurantDetailsPageStyle>
      <MenuList />
    </SafeView>
  );
};
