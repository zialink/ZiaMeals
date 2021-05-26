import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/restaurants/screens/settingsScreen/settingsScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};
