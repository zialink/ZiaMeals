import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import { FavouriteButton } from "../favouriteStyles";

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const isFavourite = favourites.find(
    (favourite) => favourite.placeId === restaurant.placeId
  );

  const toggleFavourite = () => {
    !isFavourite
      ? addToFavourites(restaurant)
      : removeFromFavourites(restaurant);
  };

  return (
    <FavouriteButton onPress={() => toggleFavourite()}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
