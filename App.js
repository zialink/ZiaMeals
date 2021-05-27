import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import firebase from "firebase";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { AppNavigation } from "./src/infrasctructure/navigator/";
import { theme } from "./src/infrasctructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantsContext";
import { FavouritesContextProvider } from "./src/services/favourites/favouritesContext";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCbAlzqTplUKnaCJmKSEAydMiySAP1QzAk",
  authDomain: "ziameals.firebaseapp.com",
  projectId: "ziameals",
  storageBucket: "ziameals.appspot.com",
  messagingSenderId: "522209845763",
  appId: "1:522209845763:web:2eb048d05b165edbba2436",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <AppNavigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
