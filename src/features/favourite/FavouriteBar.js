import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactRestaurantInfo } from "../restaurants/components/CompactRestaurantInfo";
import { FavouritesWrapper, FavouritesSpacing } from "./favouriteStyles";
import { Text } from "../../utils/typography/Text";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Text variant="caption">Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <FavouritesSpacing key={restaurant.placeId}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetails", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </FavouritesSpacing>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
