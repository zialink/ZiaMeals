import React from "react";
import { Platform } from "react-native";
import {
  MapRestaurantView,
  CompactWebView,
  CompactImage,
  MapText,
} from "./restaurantStyles";

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <MapRestaurantView>
      <Image source={{ uri: restaurant.photos[0] }} />
      <MapText>{restaurant.name}</MapText>
    </MapRestaurantView>
  );
};
