import React, { useState, useContext } from "react";

import AuthContext from "../../contexts/auth";
import Atlaslogo from "../../assets/AtlasLoja.png";
import { signIn } from "../../services/auth";
import { DashboardMain, AtlasLogo, AtlasButton, LoginText } from "./styles";

export default function LoginScreen(props) {
  const { handleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitLogin() {
    handleLogin();
  }

  return (
    <DashboardMain>
      <AtlasLogo source={Atlaslogo} />
      <AtlasButton onPress={submitLogin}>
        <LoginText>Login</LoginText>
      </AtlasButton>
    </DashboardMain>
  );
}
