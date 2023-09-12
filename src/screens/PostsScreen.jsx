import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Post from "./Post";
import { useRoute } from "@react-navigation/native";

const PostsScreen = () => {
  const {
    params: { posts },
  } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.containerPost}>
        <View style={styles.containerPhoto}>
          <Image
            source={require("../images/photoProfile.jpg")}
            style={styles.photo}
          />
        </View>
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={{ fontSize: 11, color: "#212121" }}>
            email@example.com
          </Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={(posts) => <Post posts={posts} />}
        keyExtractor={(item) => item.id}
        style={{ gap: 24 }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  containerPost: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerPhoto: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#212121",
  },
});

export default PostsScreen;
