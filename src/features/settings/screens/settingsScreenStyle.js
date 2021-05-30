import styled from "styled-components";
import { Button, Avatar } from "react-native-paper";
import { colors } from "../../../infrasctructure/theme/colors";

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
