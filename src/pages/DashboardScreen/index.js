import React from "react";

import { Image, Button } from "react-native";

import { useAuth } from "../../contexts/auth";
import Atlaslogo from "../../../assets/AtlasLoja.png";

import styled from "styled-components/native";

const DashboardContainer = styled.View``;

export default function DashboardScreen(props) {
  const { handleLogout } = useAuth();

  return (
    <DashboardContainer>
      <Image source={Atlaslogo} />
      <Button title="AAA" onPress={handleLogout} />
    </DashboardContainer>
  );
}
