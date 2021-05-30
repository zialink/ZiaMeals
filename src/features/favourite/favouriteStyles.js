import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const FavouritesWrapper = styled.View`
  padding: 15px;
`;

export const FavouritesSpacing = styled.View`
  margin-right: 15px;
`;

export const FavouritesScreenText = styled.Text`
  padding: ${(props) => props.theme.space.positive[3]};
  margin-top: ${(props) => props.theme.space.positive[2]};
`;
