import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/accountScreen";
import { LoginScreen } from "../../features/account/screens/loginScreen";
import { RegisterScreen } from "../../features/account/screens/registerScreen";

const GuestView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
