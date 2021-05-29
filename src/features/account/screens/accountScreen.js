import React from "react";
import LottieView from "lottie-react-native";

import {
  ImageBG,
  GuestView,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../accountStyles";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageBG>
      <GuestView>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
          />
        </AnimationWrapper>
        <Title>Zia Meals</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <AuthButton
            icon="account"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </AccountContainer>
      </GuestView>
    </ImageBG>
  );
};
