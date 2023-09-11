import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import PostsScreen from "./src/screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import CreatePostsScreen from "./src/screens/CreatePostsScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import MapScreen from "./src/screens/MapScreen";
import Home from "./src/screens/Home";
import ProfileScreen from "./src/screens/ProfileScreen";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MainStack = createStackNavigator();

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
      <NavigationContainer>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          resizeMethod="resize"
          style={styles.imageBackground}
        >
          <MainStack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={() => ({})}
          >
            <MainStack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{
                title: false,
              }}
            />
            <MainStack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                title: false,
              }}
            />
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                title: false,
              }}
            />
            {/* <MainStack.Screen name="PostsScreen" component={PostsScreen} />
            <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <MainStack.Screen
              name="CreatePostsScreen"
              component={CreatePostsScreen}
            />
            <MainStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
            />
            <MainStack.Screen name="MapScreen" component={MapScreen} />  */}
          </MainStack.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});
