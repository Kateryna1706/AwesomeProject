import React from "react";
import { Image, StyleSheet, View } from "react-native";
import RegistrationScreen from "./RegistrationScreen.js";

const background = require("./images/background.jpg");

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={background} />
      <View style={styles.photoProfile}></View>

      <RegistrationScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375,
  },
  photoProfile: {
    position: "absolute",
    top: 203,
    left: 128,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
});

export default PostsScreen;
