import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import MainNavigator from "./src/routes/MainNavigator";

import { ImageBackground, StyleSheet, View } from "react-native";

import Background from "./src/images/background.jpg";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.imageBackground}
      >
        <MainNavigator />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});
