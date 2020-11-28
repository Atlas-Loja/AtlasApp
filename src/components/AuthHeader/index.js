import React from "react";
import { Dimensions } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

import { Header, AtlasLogo } from "./styles";
import Atlaslogo from "../../../assets/AtlasLoja.png";

export default function AuthHeader() {
  const { width } = Dimensions.get("window");

  return (
    <>
      <Header>
        <Svg width={width} height={width} viewBox="0 0 375 340">
          <Defs>
            <LinearGradient
              x1="90.743%"
              y1="87.641%"
              x2="10.14%"
              y2="3.465%"
              id="prefix__a"
            >
              <Stop stopColor="#53b4ff" offset="0%" />
              <Stop stopColor="#3186ff" offset="100%" />
            </LinearGradient>
          </Defs>
          <Path
            d="M.11-2H376c-.005 204.081-.005 306.134 0 306.158-95.114 82-135.593-8.28-188-16.789C98.06 266.778 51.482 346.402.11 262.41-.037 251.212-.037 163.075.11-2z"
            fill="url(#prefix__a)"
            fillRule="evenodd"
          />
        </Svg>
      </Header>
      <AtlasLogo source={Atlaslogo} style={{ resizeMode: "contain" }} />
    </>
  );
}
