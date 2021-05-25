import MapView from "react-native-maps";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.positive[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const MapText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.body}
`;

export const MapImage = styled(WebView)`
  border-radius: 10px;
  width: 150px;
  height: 100px;
`;

export const MapRestaurantView = styled.View`
  padding: 10px;
  align-items: center;
  max-width: 150px;
`;
