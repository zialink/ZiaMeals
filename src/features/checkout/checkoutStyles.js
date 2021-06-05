import styled from "styled-components";
import { Avatar } from "react-native-paper";

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
