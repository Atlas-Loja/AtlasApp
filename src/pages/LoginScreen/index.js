import React, { useState } from "react";

import { useAuth } from "../../contexts/auth";
import Header from "../../components/Header";
import validator from "validator";
import { isReachable } from "../../services/network";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { LinearGradient as Gradient } from "expo-linear-gradient";
import {
  DashboardMain,
  AtlasButton,
  AtlasInput,
  AtlasFormInput,
  AtlasForm,
  Footer,
  ForgotPassword,
  AtlasFormFooter,
  FooterReportButton,
} from "./styles";
import SvgUri from "expo-svg-uri";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import EmailPath from "../../../assets/alternate_email-black-24dp.svg";

export default function LoginScreen(props) {
  const { handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submitLogin() {
    setLoading(true);
    const reachable = await isReachable();
    if (!reachable) {
      Alert.alert(
        "Ops!",
        "Não foi possível se conectar aos servidores da Atlas Loja.",
        [{ text: "OK", onPress: () => setLoading(false) }],
        { cancelable: false }
      );

      return;
    }
    if (validator.isEmail(email)) {
      if (password.length >= 6 && password.length <= 30) {
        Keyboard.dismiss();
        handleLogin(email, password);
        setLoading(false);
      } else {
        Alert.alert(
          "Senha inválida",
          "Sua senha deve conter somente de 6 a 30 caracteres.",
          [{ text: "OK", onPress: () => setLoading(false) }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Endereço de e-mail inválido",
        "Por favor, forneça um endereço de e-mail válido para efetuar login no aplicativo.",
        [{ text: "OK", onPress: () => setLoading(false) }],
        { cancelable: false }
      );
    }
  }

  return (
    <DashboardMain behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header title="Entrar" />
          <AtlasForm>
            <AtlasFormInput>
              <SvgUri
                width="24"
                height="24"
                source={EmailPath}
                fill="#707070"
              />
              <AtlasInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Endereço de E-mail"
              />
            </AtlasFormInput>
            <AtlasFormInput>
              <MaterialCommunityIcons name="lock" size={24} color="#707070" />
              <AtlasInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                keyboardType="default"
                autoCorrect={false}
                secureTextEntry={!visibility}
                placeholder="Digite sua senha"
              />
              {visibility ? (
                <TouchableOpacity>
                  <MaterialIcons
                    name="visibility-off"
                    size={24}
                    color="#707070"
                    onPress={() => setVisibility(false)}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <MaterialIcons
                    name="visibility"
                    size={24}
                    color="#707070"
                    onPress={() => setVisibility(true)}
                  />
                </TouchableOpacity>
              )}
            </AtlasFormInput>
            <ForgotPassword
              onPress={() => {
                console.log("Esqueceu sua senha rapaz?");
              }}
            >
              <Text style={{ color: "#1C8DFF" }}>Esqueci minha senha</Text>
            </ForgotPassword>
          </AtlasForm>
          <AtlasFormFooter>
            <AtlasButton
              onPress={submitLogin}
              disabled={loading}
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
                <Text
                  style={{ fontSize: 22, color: "#fff", fontWeight: "bold" }}
                >
                  {!loading ? (
                    "Autenticar"
                  ) : (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  )}
                </Text>
              </Gradient>
            </AtlasButton>
          </AtlasFormFooter>
          <Footer>
            <Text style={{ color: "#707070", fontSize: 18 }}>
              Feito com <AntDesign name="heart" color="#707070" size={20} /> por
              Atlas
            </Text>
            <FooterReportButton>
              <MaterialIcons name="feedback" size={30} color="#707070" />
            </FooterReportButton>
          </Footer>
        </View>
      </TouchableWithoutFeedback>
    </DashboardMain>
  );
}
