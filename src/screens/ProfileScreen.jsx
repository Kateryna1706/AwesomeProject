import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Post from "../components/Post";
// import { useRoute } from "@react-navigation/native";

const photo = require("../images/photoProfile.jpg");
import Background from "../images/background.jpg";
const postsTrial = [
  {
    id: 3424515,
    postPhoto: require("../images/photoPostCommentFirst.jpg"),
    postTitle: "Ліс",
    location: "Ukraine",
    comments: [],
  },
  {
    id: 1258933,
    postPhoto: require("../images/photoPostCommentSecond.jpg"),
    postTitle: "Захід на Чорному морі",
    location: "Ukraine",
    comments: [],
  },
  {
    id: 1233333,
    postPhoto: require("../images/photoPostCommentThird.jpg"),
    postTitle: "Старий будиночок у Венеції",
    location: "Italy",
    comments: [],
  },
];

const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState();
  // const route = useRoute();
  // const { posts } = route.params;

  const onPress = () => {
    console.log("Profile");
  };

  const renderItem = ({ item }) => {
    return <Post item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      resizeMethod="resize"
      style={styles.imageBackground}
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
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  profileContainer: {
    marginTop: 147,
    backgroundColor: "#FFFFFF",
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 160,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerPhoto: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    // width: 120,
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
    marginTop: 92,
    marginBottom: 32,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto",
  },
});

export default ProfileScreen;
