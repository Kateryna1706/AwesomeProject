import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const Post = ({ post }) => {
  const navigation = useNavigation();

  const handlePressComment = (comments) => {
    navigation.navigate("CommentsScreen", { comments });
  };

  return (
    <View style={styles.containerPost}>
      <Image source={post.postPhoto} style={styles.photo}></Image>
      <Text style={styles.title}>{post.postTitle}</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => handlePressComment(post.comments)}
          style={styles.containerComment}
        >
          <EvilIcons name="comment" size={18} color="black" />
          <Text>{post.comments.length}</Text>
        </Pressable>
        <Text>{post.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    gap: 8,
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
