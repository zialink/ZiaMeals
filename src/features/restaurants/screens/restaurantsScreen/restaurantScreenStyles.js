import styled from "styled-components/native";
import { FlatList, View } from "react-native";

export const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
  },
}))``;

export const RestaurantDetailsPageStyle = styled(View)`
  padding: ${(props) => props.theme.space.positive[2]};
  flex: 1;
`;
