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
    return (props) => props.theme.space.positive[3];
  }
};

export const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
  },
}))``;

export const SafeView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${platformSafeArea};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Loading = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;
