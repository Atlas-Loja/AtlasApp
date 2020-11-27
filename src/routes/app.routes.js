import React from "react";

import DashboardScreen from "../pages/DashboardScreen";
import { createStackNavigator } from "@react-navigation/stack";

const DashboardStack = createStackNavigator();

const DashboardRoutes = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen name="DashboardScreen" component={DashboardScreen} />
  </DashboardStack.Navigator>
);

export default DashboardRoutes;
