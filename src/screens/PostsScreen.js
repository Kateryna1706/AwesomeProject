import React from "react";
import { Image, StyleSheet, View } from "react-native";
import RegistrationScreen from "./RegistrationScreen";
// import LoginScreen from "./LoginScreen";

const background = require("../images/background.jpg");

const PostsScreen = () => {
  return (
    <View collapsable={false} style={styles.container}>
      <Image source={background} />
      {/* <LoginScreen /> */}
      <RegistrationScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 375,
  },
});

export default PostsScreen;
