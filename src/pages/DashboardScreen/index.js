import React from "react";

import { Image, Button } from "react-native";

import Atlaslogo from "../../assets/AtlasLoja.png";

import styled from "styled-components/native";

const DashboardContainer = styled.View``;

export default function DashboardScreen(props) {
  return (
    <DashboardContainer>
      <Image source={Atlaslogo} />
    </DashboardContainer>
  );
}
