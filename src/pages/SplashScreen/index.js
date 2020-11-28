import React from "react";
import { Platform, Image } from "react-native";

import styled from "styled-components/native";

import Atlaslogo from "../../../assets/AtlasLoja.png";
import atlas from "../../../assets/atlasb.json";
import gradientBackground from "../../../assets/gradient.png";

import LottieView from "lottie-react-native";

const BackGroundGradient = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <BackGroundGradient source={gradientBackground}>
    {Platform.OS === "ios" ? (
      <LottieView autoSize resizeMode="contain" source={atlas} autoPlay loop />
    ) : (
      <Image source={Atlaslogo} />
    )}
  </BackGroundGradient>
);
