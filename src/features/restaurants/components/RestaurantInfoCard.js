import React from "react";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../utils/typography/Text";
import { Favourite } from "../../favourite/Favourite";

import {
  Info,
  Icon,
  Container,
  Rating,
  RestaurantOpenedOrClosed,
  RestaurantClosed,
  Address,
  RestaurantCard,
  RestaurantCardCover,
} from "./restaurantStyles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Kentaucky Fried Chicken",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "No 3, Sasha Street, Ipaja, Lagos",
    isOpenNow = false,
    rating = 5,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Container>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <RestaurantOpenedOrClosed>
            {isClosedTemporarily && (
              <RestaurantClosed>Closed Temporarily</RestaurantClosed>
            )}
            {!isOpenNow && !isClosedTemporarily ? (
              <RestaurantClosed>Closed</RestaurantClosed>
            ) : (
              isOpenNow && <SvgXml xml={open} width={20} height={20} />
            )}
            <Icon source={{ uri: icon }} />
          </RestaurantOpenedOrClosed>
        </Container>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
