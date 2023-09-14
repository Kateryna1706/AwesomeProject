import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import MainNavigator from "./src/routes/MainNavigator";

import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <MainNavigator />
    </View>
  );
}
