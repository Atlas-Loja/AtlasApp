import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "./pages/LoginScreen";
import DashBoardScreen from "./pages/DashboardScreen";

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Dashboard: {
    screen: DashBoardScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const App = createAppContainer(RootStack);

export default App;
