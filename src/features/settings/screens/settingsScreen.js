import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import {
  AuthButton,
  AvatarIcon,
  SettingsView,
  SettingsText,
  AvatarImage,
} from "./settingsScreenStyle";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";

export const SettingsScreen = ({ navigation }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePhoto = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setProfilePhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePhoto(user);
    }, [user])
  );

  return (
    <SettingsView>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        {profilePhoto ? (
          <AvatarImage source={{ uri: profilePhoto }} />
        ) : (
          <AvatarIcon />
        )}
      </TouchableOpacity>
      <SettingsText>{user.email}</SettingsText>
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
