import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar, View, Platform } from "react-native";

import { RestaurantInfo } from "../components/restaurant-info.component";

const platformSafeArea = () => {
  if (Platform.OS === "android") {
    return StatusBar.currentHeight + "px";
  } else if (Platform.OS === "ios") {
    return (props) => props.theme.space.positive[0];
  } else {
    return (props) => props.theme.space.positive[3];
  }
};

const SafeView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${platformSafeArea};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const SearchContainer = styled(View)`
  margin: ${(props) => props.theme.space.positive[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space.positive[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

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
        <RestaurantListContainer>
          <RestaurantInfo />
        </RestaurantListContainer>
      </SafeView>
    </>
  );
};
