import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurantsScreen/restaurantsScreen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurantsScreen/restaurantDetailsScreen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
      headerMode="screen"
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            height: 110,
          },
          headerLeftContainerStyle: { paddingTop: 40 },
          safeAreaInsets: { top: -10 },
        }}
      />
    </RestaurantsStack.Navigator>
  );
};
