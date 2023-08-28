import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import RegistrationScreen from "./RegistrationScreen";
// import LoginScreen from "./LoginScreen";

import Background from "../images/background.jpg";

const PostsScreen = () => {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      resizeMethod="resize"
      style={styles.imageBackground}
    >
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});

export default PostsScreen;
