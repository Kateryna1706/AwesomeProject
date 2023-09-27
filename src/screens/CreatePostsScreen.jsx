import React, { useEffect, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { nanoid } from "nanoid/non-secure";
import { launchImageLibrary } from "react-native-image-picker";

const CreatePostsScreen = () => {
  const [posts, setPosts] = useState([
    // {
    //   id: 3424515,
    //   postPhoto: require("../images/photoPostCommentFirst.jpg"),
    //   postTitle: "Ліс",
    //   location: "Ivano-Frankivs'k Region, Ukraine",
    //   comments: [],
    // },
    // {
    //   id: 1258933,
    //   postPhoto: require("../images/photoPostCommentSecond.jpg"),
    //   postTitle: "Захід сонця",
    //   location: "Ivano-Frankivs'k Region, Ukraine",
    //   comments: [],
    // },
    // {
    //   id: 1233333,
    //   postPhoto: require("../images/photoPostCommentThird.jpg"),
    //   postTitle: "Старий будиночок у Венеції",
    //   location: "Italy",
    //   comments: [],
    // },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [isFocusPostTitle, setIsFocusPostTitle] = useState(false);
  const [isFocusLocation, setIsFocusLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [asset, setAsset] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const pressIconCamera = async () => {
    setLoading(true);
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      if (url) {
        const asset = await MediaLibrary.createAssetAsync(uri);
        setAsset(asset.albumId);
        setPostPhoto(uri);
        setLoading(false);
      }
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const uploadPhoto = async () => {
    if (!hasPermission) {
      return <Text>No access</Text>;
    }
    if (hasPermission) {
      const library = await MediaLibrary.getAssetsAsync({ album: asset });
      console.log(library);
    }

    // const result = await launchImageLibrary({ mediaType: "photo" });
    // if (result.assets) {
    //   console.log(result.assets);
    // }
  };

  const pressButtonDelete = () => {
    setPostTitle("");
    setPostPhoto("");
    setLocation("");
  };

  const createPost = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }
    let locationCurrent = await Location.getCurrentPositionAsync({});

    const coords = {
      latitude: locationCurrent.coords.latitude,
      longitude: locationCurrent.coords.longitude,
    };
    setCurrentLocation(coords);

    const newPost = {
      id: nanoid(),
      postPhoto,
      postTitle,
      location,
      comments: [],
    };
    const allPosts = [newPost, ...posts];
    setPosts(allPosts);

    navigation.navigate("PostsScreen", {
      posts: allPosts,
      location: currentLocation,
    });
  };

  useEffect(() => {
    requestCameraPermission();
    requestMediaPermission();
  }, []);

  useEffect(() => {
    setHasPermission(cameraPermission?.granted && mediaPermission?.granted);
  }, [cameraPermission, mediaPermission]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-110}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View>
          <View style={styles.containerPost}>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#00ff00"
                style={styles.loading}
              />
            )}
            {postPhoto && !loading && (
              <Image
                source={{ uri: `${postPhoto}` }}
                style={styles.photoPost}
              ></Image>
            )}
            {!postPhoto && !loading && (
              <Camera
                style={styles.camera}
                type={type}
                ref={setCameraRef}
                ratio="1:1"
                zoom={0}
                onCameraReady={() => {
                  console.log("Camera is ready");
                }}
              ></Camera>
            )}
            {!loading && (
              <Pressable onPress={pressIconCamera} style={styles.iconPost}>
                <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
              </Pressable>
            )}
          </View>
          <Pressable onPress={uploadPhoto}>
            <Text style={styles.textPhoto}>Завантажте фото</Text>
          </Pressable>
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
            <View style={styles.containerInput}>
              <Pressable style={styles.iconLocation}>
                <EvilIcons name="location" size={24} color="#BDBDBD" />
              </Pressable>
              <TextInput
                style={[styles.input, isFocusLocation && styles.isFocus]}
                autoCapitalize="none"
                onChangeText={setLocation}
                value={location}
                placeholder="Місцевість..."
                onFocus={() => setIsFocusLocation(true)}
                onBlur={() => setIsFocusLocation(false)}
              />
            </View>

            <Pressable
              style={[
                styles.buttonSubmit,
                postTitle && postPhoto && location && styles.buttonSubmitFocus,
              ]}
              onPress={createPost}
            >
              <Text style={styles.textButton}>Опубліковати</Text>
            </Pressable>
          </View>
        </View>
        <Pressable onPress={pressButtonDelete} style={styles.buttonTrash}>
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
    justifyContent: "center",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  camera: {
    flex: 1,
  },
  photoPost: {
    height: 240,
    borderRadius: 8,
  },
  loading: {
    alignSelf: "center",
  },
  iconPost: {
    position: "absolute",
    top: 90,
    left: 148,
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
  containerInput: {
    paddingLeft: 28,
  },
  iconLocation: {
    position: "absolute",
    left: 0,
    top: 35,
    width: 24,
    height: 24,
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
  buttonSubmitFocus: {
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
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
