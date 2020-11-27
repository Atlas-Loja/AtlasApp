import "react-native-gesture-handler";

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";

import { MainView } from "./styles/global";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainView>
          <Routes />
        </MainView>
      </AuthProvider>
    </NavigationContainer>
  );
}
