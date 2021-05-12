import React, { useState } from "react";
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
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
          ]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeView>
    </>
  );
};
