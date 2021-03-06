import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "../../features/map/screen/mapScreen";

const MapStack = createStackNavigator();

export const MapNavigator = () => {
  return (
    <MapStack.Navigator headerMode="none">
      <MapStack.Screen name="Map" component={MapScreen} />
    </MapStack.Navigator>
  );
};
