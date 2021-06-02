import styled from "styled-components";
import { Button, Avatar } from "react-native-paper";
import { colors } from "../../../infrasctructure/theme/colors";
import { Camera } from "expo-camera";
import { Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

export const AuthButton = styled(Button).attrs({
  color: colors.brand.branded,
})`
  margin: ${(props) => props.theme.space.positive[3]};
`;

export const SettingsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AvatarIcon = styled(Avatar.Icon).attrs({
  size: 140,
  backgroundColor: colors.brand.branded,
  icon: "human",
})``;

export const AvatarImage = styled(Avatar.Image).attrs((props) => ({
  size: 140,
  backgroundColor: colors.brand.branded,
}))``;

export const SettingsText = styled.Text``;

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;
