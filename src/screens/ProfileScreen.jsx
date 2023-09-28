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
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const photo = require("../images/photoProfile.jpg");
import Background from "../images/background.jpg";

const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const route = useRoute();

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
        <Pressable
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.exit}
        >
          <Ionicons name="exit-outline" size={25} color="#BDBDBD" />
        </Pressable>
        {route.params?.posts && (
          <FlatList
            data={route.params.posts}
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
    height: "100%",
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
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoProfile: {
    borderRadius: 16,
  },
  exit: {
    position: "absolute",
    top: 22,
    right: 22,
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
