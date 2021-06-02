import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../infrasctructure/theme/colors";
import { Text } from "../../utils/typography/Text";

export const ImageBG = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GuestView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(100, 100, 100, 0.3);
  padding: ${(props) => props.theme.space.positive[4]};
  margin: ${(props) => props.theme.space.positive[4]};
  justify-content: center;
  align-content: center;
`;

export const BackButtonWrapper = styled.View`
  margin-left: 30%;
  margin-right: 30%;
  justify-content: center;
  align-content: center;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.branded,
})`
  margin-bottom: ${(props) => props.theme.space.positive[3]};
  padding: ${(props) => props.theme.space.positive[2]};
`;

export const AuthTextInput = styled(TextInput).attrs({
  mode: "outlined",
  theme: {
    colors: { primary: colors.brand.branded, underlineColor: "transparent" },
  },
})`
  margin-bottom: 16px;
`;

export const ErrorView = styled.View`
  padding: ${(props) => props.theme.space.positive[3]};
`;

export const ErrorText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-weight: bold;
`;

export const Title = styled(Text)`
  font-size: 30px;
  align-self: center;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space.positive[2]};
`;
