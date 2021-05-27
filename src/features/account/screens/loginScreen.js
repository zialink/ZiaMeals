import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";

import {
  ImageBG,
  GuestView,
  AccountContainer,
  AuthButton,
  AuthTextInput,
  ErrorView,
  ErrorText,
  Title,
  BackButtonWrapper,
} from "../accountStyles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);

  const handleOnPress = () => {
    if (email && password) {
      onLogin(email, password);
    }
  };
  return (
    <ImageBG>
      <GuestView>
        <Title>Zia Meals</Title>
        <AccountContainer>
          <AuthTextInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(emailText) => setEmail(emailText)}
          />
          <AuthTextInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(passwordText) => setPassword(passwordText)}
          />
          {error && (
            <ErrorView>
              <ErrorText>{error}</ErrorText>
            </ErrorView>
          )}
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => handleOnPress()}
          >
            Login
          </AuthButton>
        </AccountContainer>
        <BackButtonWrapper>
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </BackButtonWrapper>
      </GuestView>
    </ImageBG>
  );
};
