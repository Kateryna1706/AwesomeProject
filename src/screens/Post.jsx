import { View } from "react-native";

const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <View>
          <Image source={post.postPhoto}></Image>
          <Text>{post.postTitle}</Text>
          <Text>{post.comments}</Text>
          <Text>{post.location}</Text>
        </View>
      ))}
    </>
  );
};

export default Post;
