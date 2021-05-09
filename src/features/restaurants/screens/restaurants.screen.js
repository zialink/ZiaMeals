import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
      ios: {
        marginTop: 0,
      },
      default: {
        marginTop: 20,
        marginBottom: 20,
      },
    }),
  },
  search: {
    flex: 1,
    backgroundColor: "green",
    padding: 20,
  },
  list: {
    flex: 8,
    backgroundColor: "blue",
    padding: 20,
  },
});
