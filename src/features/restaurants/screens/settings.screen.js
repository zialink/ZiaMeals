import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const SettingsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SettingsScreen = () => {
  return (
    <SettingsView>
      <Text>Settings</Text>
    </SettingsView>
  );
};
