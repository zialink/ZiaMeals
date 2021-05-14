import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const MapsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MapScreen = () => {
  return (
    <MapsView>
      <Text>Map</Text>
    </MapsView>
  );
};
