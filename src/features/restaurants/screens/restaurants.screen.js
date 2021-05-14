import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
} from "react-native";

import { RestaurantInfo } from "../components/RestaurantInfo";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "../../../services/restaurants/restaurants.context";

const platformSafeArea = () => {
  if (Platform.OS === "android") {
    return StatusBar.currentHeight + "px";
  } else if (Platform.OS === "ios") {
    return (props) => props.theme.space.positive[0];
  } else {
    return (props) => props.theme.space.positive[3];
  }
};

const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
  },
}))``;

const SafeView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${platformSafeArea};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const SearchContainer = styled(View)`
  margin: ${(props) => props.theme.space.positive[3]};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, errors } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  //console.log(restaurants);

  return (
    <>
      <SafeView>
        <SearchContainer>
          <Searchbar
            placeholder="Search Restaurant"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
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
