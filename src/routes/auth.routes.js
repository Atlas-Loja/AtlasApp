import React from "react";

import LoginScreen from "../pages/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false, gestureEnabled: false }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
