import React from "react";

import { Image, Button, View, SafeAreaView } from "react-native";
import { DashboardContainer, ContainerHeader } from "./styles";

import { useAuth } from "../../contexts/auth";
import { LinearGradient as Gradient } from "expo-linear-gradient";
import Atlaslogo from "../../../assets/AtlasLoja.png";

import { FontAwesome5 } from "@expo/vector-icons";

export default function DashboardScreen(props) {
  const { handleLogout } = useAuth();

  return (
    <View
      style={{
        position: "relative",
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
