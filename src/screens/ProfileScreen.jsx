import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Post from "./Post";
// import { useRoute } from "@react-navigation/native";

const photo = require("../images/photoProfile.jpg");
const postsTrial = [
  {
    id: 3424515,
    postPhoto: require("../images/photoPostCommentFirst.jpg"),
    postTitle: "Ліс",
    location: "Ivano-Frankivs'k Region, Ukraine",
    comments: [],
  },
  {
    id: 1258933,
    postPhoto: require("../images/photoPostCommentSecond.jpg"),
    postTitle: "Захід сонця",
    location: "Ivano-Frankivs'k Region, Ukraine",
    comments: [],
  },
];

const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState();
  // const route = useRoute();
  // const { posts } = route.params;

  const renderItem = ({ item }) => {
    return <Post item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-131}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.profileContainer}>
          <View style={styles.containerPhoto}>
            <Image source={photo} style={styles.photoProfile} />
            <Pressable onPress={onPress} style={styles.button}>
              <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
            </Pressable>
          </View>

          <Text style={styles.header}>Natali Romanova</Text>
          {postsTrial && (
            <FlatList
              data={postsTrial}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  profileContainer: {
    padding: 16,
    paddingTop: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: `#ffffff`,
  },
  containerPhoto: {
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoProfile: {
    borderRadius: 16,
  },
  button: {
    width: 25,
    left: 105,
    top: -35,
    borderRadius: 50,
    backgroundColor: "#E8E8E8",
  },
  header: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto",
  },
});

export default ProfileScreen;
