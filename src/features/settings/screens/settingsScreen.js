import React, { useContext } from "react";

import { AuthButton, AvatarIcon, SettingsView } from "./settingsScreenStyle";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SettingsView>
      <AvatarIcon />
      <AuthButton
        mode="contained"
        icon="heart"
        onPress={() => navigation.navigate("Favourites")}
      >
        Favourites
      </AuthButton>
      <AuthButton mode="contained" onPress={() => onLogout()}>
        Logout
      </AuthButton>
    </SettingsView>
  );
};
