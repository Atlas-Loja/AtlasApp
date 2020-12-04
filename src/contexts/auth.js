import React, { createContext, useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { signIn } from "../services/auth";
import api from "../services/api";

const AuthContext = createContext({
  signed: false,
  loading: true,
  user: {},
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@AtlasAuth:user");
      const storagedToken = await AsyncStorage.getItem("@AtlasAuth:token");

      if (storagedToken && storagedUser) {
        //verify if token is valid
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function handleLogin(email, password) {
    const response = await signIn(email, password);
    console.log(response);
    if (!response) {
      Alert.alert(
        "Ops!",
        "Estamos com problemas com nossos servidores no momento, por favor tente novamente mais tarde.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }
    if (response.status == 200) {
      const data = response.data;
      setUser(data.user);

      api.defaults.headers.Authorization = `Bearer ${data.session.token}`;

      await AsyncStorage.multiSet([
        ["@AtlasAuth:user", JSON.stringify(data.user)],
        ["@AtlasAuth:token", data.session.token],
      ]);
    } else {
      Alert.alert(
        "Ocorreu um erro ao tentar efetuar o login",
        response.data[0].message,
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  }

  function handleLogout() {
    AsyncStorage.clear().then(setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, handleLogin, handleLogout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
