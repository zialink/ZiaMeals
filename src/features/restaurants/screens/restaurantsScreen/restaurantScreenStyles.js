import styled from "styled-components/native";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
} from "react-native";

export const platformSafeArea = () => {
  if (Platform.OS === "android") {
    return StatusBar.currentHeight + "px";
  } else if (Platform.OS === "ios") {
    return (props) => props.theme.space.positive[0];
  } else {
    return (props) => props.theme.space.positive[1];
  }
};

export const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
  },
}))``;

export const RestaurantDetailsPageStyle = styled(View)`
  padding: ${(props) => props.theme.space.positive[2]};
  flex: 1;
`;

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${platformSafeArea};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
