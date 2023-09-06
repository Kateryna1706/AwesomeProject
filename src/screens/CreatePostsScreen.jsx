import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const photoPost = require("../images/photoPost.jpg");

const CreatePostsScreen = () => {
  const [postTitle, setPostTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isFocusPostTitle, setIsFocusPostTitle] = useState(false);
  const [isFocusLocation, setIsFocusLocation] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-131}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.containerPost}>
          <Image source={photoPost} style={styles.photoPost}></Image>
        </View>
        <Text style={styles.textPhoto}>Завантажте фото</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={[styles.input, isFocusPostTitle && styles.isFocus]}
            autoCapitalize="none"
            onChangeText={setPostTitle}
            value={postTitle}
            placeholder="Назва..."
            onFocus={() => setIsFocusPostTitle(true)}
            onBlur={() => setIsFocusPostTitle(false)}
          />
          <TextInput
            style={[styles.input, isFocusLocation && styles.isFocus]}
            autoCapitalize="none"
            onChangeText={setLocation}
            value={location}
            placeholder="Місцевість..."
            onFocus={() => setIsFocusLocation(true)}
            onBlur={() => setIsFocusLocation(false)}
          />
          <Pressable style={styles.buttonSubmit}>
            <Text>Опубліковати</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  containerPost: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
  },
  photoPost: {
    width: 343,
    height: 240,
  },
  textPhoto: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Roboto",
    color: "#BDBDBD",
  },
  formContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: `#ffffff`,
  },
  input: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    backgroundColor: "#ffffff",
  },
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 120,
    paddingLeft: 120,
    marginTop: 32,
    borderRadius: 100,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
});

export default CreatePostsScreen;
