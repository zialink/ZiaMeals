import React from "react";
import styled from "styled-components";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoadingView = styled.View`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7)
    top: 50%;
    left: 50%;
    margin-left: -25px;
`;

export const Loading = () => (
  <LoadingView elevation={7}>
    <ActivityIndicator animating={true} color={Colors.red800} size="large" />
  </LoadingView>
);
