import React from "react";
import { MapRestaurantView, MapImage, MapText } from "../mapStyles";

export const MapCallout = ({ restaurant }) => {
  return (
    <MapRestaurantView>
      <MapImage source={{ uri: restaurant.photos[0] }} />
      <MapText>{restaurant.name}</MapText>
    </MapRestaurantView>
  );
};
