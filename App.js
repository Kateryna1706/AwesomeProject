import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
// import PostsScreen from "./src/screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import RegistrationScreen from "./screens/Register";
import HomeScreen from "./screens/Home";
import { View } from "react-native";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          {/* Аналог Routes */}
          <MainStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
          />
          {/* Аналог Route */}
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Start screen" }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
