import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../../../search/Search";
import { RestaurantInfo } from "../../components/RestaurantInfoCard";
import { RestaurantsContext } from "../../../../services/restaurants/restaurantsContext";
import { RestaurantList, SafeView, Loading } from "./restaurantScreenStyles";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, errors } = useContext(RestaurantsContext);

  return (
    <>
      <SafeView>
        <Search />
        <Loading elevation={7}>
          {isLoading && (
            <ActivityIndicator
              animating={true}
              color={Colors.red800}
              size="large"
            />
          )}
        </Loading>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeView>
    </>
  );
};
