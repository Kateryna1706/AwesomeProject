import { useState } from "react";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Post from "./Post";
// import { useRoute } from "@react-navigation/native";

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

const PostsScreen = () => {
  const [selectedId, setSelectedId] = useState();
  // const route = useRoute();
  // const { posts } = route.params;

  const renderItem = ({ item }) => {
    return <Post item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
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
      {postsTrial && (
        <FlatList
          data={postsTrial}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      )}
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
  containerProfile: {
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
