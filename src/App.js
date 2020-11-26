import React from "react";
import { View } from "react-native";

import Routes from "./routes";

import { MainView } from "./styles/global";

export default function App() {
  return (
    <MainView>
      <Routes />
    </MainView>
  );
}
