import React, { createContext, useState, useEffect, useContext } from "react";
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

  async function checkToken() {}

  async function handleLogin() {
    const response = await signIn();

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem(
      "@AtlasAuth:user",
      JSON.stringify(response.user)
    );
    await AsyncStorage.setItem("@AtlasAuth:token", response.token);
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
