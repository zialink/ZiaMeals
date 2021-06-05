import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurantsNavigator";
import { MapNavigator } from "./mapNavigator";
import { SettingsNavigator } from "./settingsNavigator";

import { LocationContextProvider } from "../../services/location/locationContext";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext";
import { FavouritesContextProvider } from "../../services/favourites/favouritesContext";
import { CheckoutNavigator } from "./checkoutNavigator";
import { CartContextProvider } from "../../services/cart/cartContext";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = focused ? "restaurant" : "restaurant-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  } else if (route.name === "Checkout") {
                    iconName = focused ? "cart" : "cart-outline";
                  } else if (route.name === "Maps") {
                    iconName = focused ? "ios-map-sharp" : "ios-map-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Maps" component={MapNavigator} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
