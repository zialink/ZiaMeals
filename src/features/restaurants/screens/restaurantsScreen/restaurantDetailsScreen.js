import React from "react";
import { MenuList } from "../../../../infrasctructure/MenuList";

import { RestaurantInfo } from "../../components/RestaurantInfoCard";
import { RestaurantDetailsPageStyle } from "./restaurantScreenStyles";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <RestaurantDetailsPageStyle>
      <RestaurantInfo restaurant={restaurant} />
      <MenuList />
    </RestaurantDetailsPageStyle>
  );
};
