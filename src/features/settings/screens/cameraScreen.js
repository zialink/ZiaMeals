import React, { useState, useEffect, useRef, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProfileCamera, InnerSnap } from "./settingsScreenStyle";
import { Text } from "../../../utils/typography/Text";

import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import { NavigationContainer } from "@react-navigation/native";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await ProfileCamera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera
      ref={(camera) => {
        cameraRef.current = camera;
      }}
      type={ProfileCamera.Constants.Type.front}
      ratio={"16:9"}
      useCamera2Api={true}
    >
      <TouchableOpacity onPress={snap} activeOpacity={0.7}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
