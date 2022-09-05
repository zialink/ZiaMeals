import styled from "styled-components";
import { Avatar, TextInput, Button } from "react-native-paper";

import { colors } from "../../infrasctructure/theme/colors";

export const CartIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.brand.branded};
`;

export const NameInput = styled(TextInput).attrs({
  mode: "outlined",
  theme: {
    colors: { primary: colors.brand.branded, underlineColor: "transparent" },
  },
})`
  margin: 16px;
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.branded,
})`
  padding: ${(props) => props.theme.space.positive[2]};
  width: 80%;
  align-self: center;
  margin-bottom: 16px;
`;

export const ClearButton = styled(Button).attrs({
  color: colors.text.secondary,
})`
  padding: ${(props) => props.theme.space.positive[2]};
  width: 80%;
  align-self: center;
  margin-bottom: 16px;
`;
