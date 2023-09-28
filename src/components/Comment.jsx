import { Text, Image, View, StyleSheet } from "react-native";

const Comment = ({ item, onPress }) => {
  return (
    <View style={styles.containerForComment} onPress={onPress}>
      <View>
        <View style={styles.profileIcon}>
          <Image source={item.iconProfile} />
        </View>
        <Text style={styles.textComment}>{item.text}</Text>
      </View>
      <Text>{item.dateCreate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForComment: {
    flexDirection: "row",
    marginBottom: 24,
  },
  profileIcon: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#000000",
  },
  textComment: {
    padding: 16,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    backgroundColor: "#E5E5E5",
  },
});

export default Comment;
