import React from "react";

import { Image, Button } from "react-native";

import Atlaslogo from "../../assets/AtlasLoja.png";

import styled from "styled-components/native";

const DashboardContainer = styled.View``;

export default function LoginScreen(props) {
  return (
    <DashboardContainer>
      <Image source={Atlaslogo} />
      <Button
        title="Login Screen"
        onPress={() => props.navigation.navigate("Login")}
      />
    </DashboardContainer>
  );
}
