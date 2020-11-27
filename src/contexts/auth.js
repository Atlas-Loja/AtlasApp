import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { signIn } from "../services/auth";

const AuthContext = createContext({
  signed: false,
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
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function handleLogin() {
    const response = await signIn();

    setUser(response.user);
    AsyncStorage.setItem("@AtlasAuth:user", JSON.stringify(response.user));
    AsyncStorage.setItem("@AtlasAuth:token", response.token);
  }

  function handleLogout() {
    AsyncStorage.clear().then(setUser(null));
  }

  if (loading) {
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
