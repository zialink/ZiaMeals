import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settingsScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};
