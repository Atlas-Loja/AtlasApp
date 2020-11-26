import React from "react";

import { Button, View } from "react-native";

export default function LoginScreen(props) {
  return (
    <View>
      <Button
        title="Dashboard Screen"
        onPress={() => props.navigation.navigate("Dashboard")}
      />
    </View>
  );
}
