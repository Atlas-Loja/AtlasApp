import React, { useContext } from "react";

import AuthContext from "../contexts/auth";

import SplashScreen from "../pages/SplashScreen";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <SplashScreen />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
