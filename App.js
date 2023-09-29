import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import MainNavigator from "./src/routes/MainNavigator";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
}
