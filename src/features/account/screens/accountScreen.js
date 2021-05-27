import React from "react";

import {
  ImageBG,
  GuestView,
  AccountContainer,
  AuthButton,
  Title,
} from "../accountStyles";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageBG>
      <GuestView>
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
