import React, { useState, useContext } from "react";

import AuthContext from "../../contexts/auth";
import AuthHeader from "../../components/AuthHeader";
import { Text } from "react-native";
import { LinearGradient as Gradient } from "expo-linear-gradient";
import { DashboardMain, AtlasButton, BodyText } from "./styles";

export default function LoginScreen(props) {
  const { handleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitLogin() {
    handleLogin();
  }

  return (
    <DashboardMain>
      <AuthHeader />
      <BodyText>Entrar</BodyText>

      <AtlasButton
        onPress={submitLogin}
        style={{
          shadowColor: "#7E88C4",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
        }}
      >
        <Gradient
          colors={["#3186FF", "#53B4FF"]}
          start={[0, 1]}
          end={[1, 0]}
          style={{
            resizeMode: "contain",
            height: 68,
            margin: 20,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, color: "#fff", fontWeight: "bold" }}>
            Autenticar
          </Text>
        </Gradient>
      </AtlasButton>
    </DashboardMain>
  );
}
