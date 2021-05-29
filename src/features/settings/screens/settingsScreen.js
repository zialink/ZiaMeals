import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { AuthButton } from "./settingsScreenStyle";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";

const SettingsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SettingsView>
      <Text>Settings</Text>
      <AuthButton mode="contained" onPress={() => onLogout()}>
        Logout
      </AuthButton>
    </SettingsView>
  );
};
