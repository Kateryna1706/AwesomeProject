import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const Post = ({ item, onPress }) => {
  const navigation = useNavigation();

  const handlePressComment = (comments) => {
    navigation.navigate("CommentsScreen", { comments });
  };

  return (
    <View style={styles.containerPost} onPress={onPress}>
      <Image source={item.postPhoto} style={styles.photo}></Image>
      <Text style={styles.title}>{item.postTitle}</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => handlePressComment(item.comments)}
          style={styles.containerComment}
        >
          <EvilIcons name="comment" size={18} color="black" />
          <Text>{item.comments.length}</Text>
        </Pressable>
        <Text>{item.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    gap: 8,
    marginTop: 32,
  },
  photo: {
    height: 240,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "medium",
    color: "#212121",
  },
  containerComment: {
    flexDirection: "row",
    gap: 9,
  },
  container: {
    flexDirection: "row",
    gap: 49,
  },
});

export default Post;
