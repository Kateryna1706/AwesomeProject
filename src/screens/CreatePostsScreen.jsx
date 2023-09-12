import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const photoPostFirst = require("../images/photoPostCommentFirst.jpg");
const photoPostSecond = require("../images/photoPostCommentSecond.jpg");

const CreatePostsScreen = () => {
  const [posts, setPosts] = useState([
    {
      postPhoto: photoPostFirst,
      postTitle: "Ліс",
      location: "Ivano-Frankivs'k Region, Ukraine",
      comments: [],
    },
    {
      postPhoto: photoPostSecond,
      postTitle: "Захід сонця",
      location: "Ivano-Frankivs'k Region, Ukraine",
      comments: [],
    },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postPhoto, setPostPhoto] = useState(photoPost);
  const [location, setLocation] = useState("");
  const [isFocusPostTitle, setIsFocusPostTitle] = useState(false);
  const [isFocusLocation, setIsFocusLocation] = useState(false);
  const navigation = useNavigation();

  const onPress = () => {
    console.log("onPress");
  };

  const createPost = () => {
    const newPost = {
      postPhoto,
      postTitle,
      location,
      comments: [],
    };
    const allPosts = [newPost, ...posts];
    setPosts(allPosts);
    navigation.navigate("PostsScreen", { posts: posts });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-131}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View>
          <View style={styles.containerPost}>
            {/* <Image source={photoPost} style={styles.photoPost}></Image> */}
            <Pressable onPress={onPress} style={styles.iconPost}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </Pressable>
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
            <Pressable style={styles.buttonSubmit} onPress={createPost}>
              <Text style={styles.textButton}>Опубліковати</Text>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.buttonTrash}>
          <Ionicons name="trash-outline" size={24} color="#BDBDBD" />
        </Pressable>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#ffffff",
  },
  containerPost: {
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  photoPost: {
    height: 240,
    borderRadius: 8,
  },
  iconPost: {
    position: "absolute",
    top: 90,
    left: 142,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#ffffff",
  },
  textPhoto: {
    marginTop: 8,
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
  },
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  textButton: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#BDBDBD",
  },
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  buttonTrash: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePostsScreen;
