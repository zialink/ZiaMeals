import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { Search } from "../../../search/Search";
import { RestaurantInfo } from "../../components/RestaurantInfoCard";
import { RestaurantsContext } from "../../../../services/restaurants/restaurantsContext";
import { RestaurantList, SafeView, Loading } from "./restaurantScreenStyles";
import { SearchContainer } from "../../components/restaurantStyles";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, errors } = useContext(RestaurantsContext);

  return (
    <>
      <SafeView>
        <SearchContainer>
          <Search />
        </SearchContainer>
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
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeView>
    </>
  );
};
