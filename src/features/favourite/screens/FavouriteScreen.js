import React, { useContext } from "react";
import { ListItem, Avatar, Text } from "react-native-elements";

import { FavouritesContext } from "../../../services/favourites/favouritesContext";

import { FavouritesWrapper, FavouritesScreenText } from "../favouriteStyles";

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <FavouritesWrapper>
      {favourites.length ? (
        favourites.map((favourite) => {
          return (
            <ListItem
              key={favourite.placeId}
              bottomDivider
              onPress={() =>
                navigation.navigate("Restaurants", {
                  screen: "RestaurantDetails",
                  params: { restaurant: favourite },
                })
              }
            >
              <Avatar source={{ uri: favourite.photos[0] }} />
              <ListItem.Content>
                <ListItem.Title>{favourite.name}</ListItem.Title>
                <ListItem.Subtitle>{favourite.address}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })
      ) : (
        <FavouritesScreenText>
          You have not added a favourite restaurant.
        </FavouritesScreenText>
      )}
    </FavouritesWrapper>
  );
};
