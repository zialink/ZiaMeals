import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

export const Info = styled(View)`
  padding: ${(props) => props.theme.space.positive[3]};
`;
export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Rating = styled(View)`
  padding: ${(props) => props.theme.space.positive[2]};
  flex-direction: row;
  flex: 1;
`;
export const RestaurantOpenedOrClosed = styled(View)`
  display: flex;
  padding: ${(props) => props.theme.space.positive[2]};
  flex-direction: row;
  justify-content: flex-end;
  flex: 2;
`;
export const RestaurantClosed = styled(Text)`
  padding-right: ${(props) => props.theme.space.positive[2]};
  margin-top: ${(props) => props.theme.space.negative[0]};
  padding-top: ${(props) => props.theme.space.positive[0]};
  color: ${(props) => props.theme.colors.text.error};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space.positive[3]};
  background: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.positive[3]};
`;
export const Icon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  padding: ${(props) => props.theme.space.positive[2]};
  margin-left: ${(props) => props.theme.space.positive[3]};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.positive[3]};
`;
