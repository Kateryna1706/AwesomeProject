import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { updatePostLike } from "../redux/posts/postsOperations";

const Post = ({ item, onPress }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pressLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let locationCurrent = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: locationCurrent.coords.latitude,
      longitude: locationCurrent.coords.longitude,
    };
    navigation.navigate("MapScreen", { location: coords });
  };

  const handlePressLike = (postId) => {
    dispatch(updatePostLike(postId));
  };

  const handlePressComment = (postId) => {
    navigation.navigate("CommentsScreen", { postId });
  };

  return (
    <View style={styles.containerPost} onPress={onPress} key={item.id}>
      <Image source={{ uri: `${item.postPhoto}` }} style={styles.photo}></Image>
      <Text style={styles.title}>{item.postTitle}</Text>
      <View style={styles.container}>
        <View style={styles.containerLikeComment}>
          <Pressable
            onPress={() => handlePressComment(item.id)}
            style={styles.containerComment}
          >
            <FontAwesome
              name="comment"
              size={18}
              color={item.comments.length > 0 ? "#FF6C00" : "#BDBDBD"}
            />
            <Text>{item.comments.length}</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePressLike(item.id)}
            style={styles.containerLike}
          >
            <AntDesign
              name="like2"
              size={20}
              color={item.like > 0 ? "#FF6C00" : "#BDBDBD"}
            />
            <Text>{item.like}</Text>
          </Pressable>
        </View>
        <Pressable onPress={pressLocation} style={styles.containerLocation}>
          <View style={styles.iconLocation}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
          </View>
          <Text>{item.location}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    gap: 8,
    marginBottom: 32,
  },
  photo: {
    height: 240,
    width: "100%",
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "medium",
    color: "#212121",
  },
  containerLikeComment: {
    flexDirection: "row",
    gap: 24,
  },
  containerComment: {
    flexDirection: "row",
    gap: 9,
  },
  containerLike: {
    flexDirection: "row",
    gap: 9,
  },
  container: {
    flexDirection: "row",
    gap: 49,
    justifyContent: "space-between",
  },
  containerLocation: {
    flexDirection: "row",
    gap: 4,
  },
  iconLocation: {
    width: 24,
    height: 24,
  },
});

export default Post;
