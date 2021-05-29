import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import { Loading } from "../../../utils/loading/Loading";

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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  const handleOnPress = () => {
    if (email && password) {
      onRegister(email, password, confirmPassword);
    }
  };
  return (
    <ImageBG>
      <GuestView>
        {isLoading && <Loading />}
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
            onChangeText={(passwordText) => setPassword(passwordText)}
          />
          <AuthTextInput
            label="Confirm Password"
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(confirmPasswordText) =>
              setConfirmPassword(confirmPasswordText)
            }
          />
          {error && (
            <ErrorView>
              <ErrorText>{error}</ErrorText>
            </ErrorView>
          )}
          <AuthButton
            icon="account"
            mode="contained"
            onPress={() => handleOnPress()}
          >
            Register
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
