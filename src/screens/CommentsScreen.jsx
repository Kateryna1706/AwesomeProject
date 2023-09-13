import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TextInput,
  FlatList,
} from "react-native";
// import { useRoute } from "@react-navigation/native";

const photoPostComment = require("../images/photoPostComment.jpg");

commentsTrial = [
  {
    id: 1386530,
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    dateCreate: new Date().toString(),
  },
  {
    id: 1290037,
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    dateCreate: new Date().toString(),
  },
  {
    id: 1292391,
    text: "Thank you! That was very helpful!",
    dateCreate: new Date().toString(),
  },
];

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

const CommentsScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const [isFocusComment, setIsFocusComment] = useState(false);
  // const route = useRoute();
  // const { comments } = route.params;

  const handleComment = (text) => {
    const comment = {
      iconProfile: "",
      text,
      dateCreate: new Date(),
    };

    const allComments = [comment, ...photoPostComment];
    setComments(allComments);
  };

  const renderItem = ({ item }) => {
    return <Comment item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        // keyboardVerticalOffset={1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.containerPost}>
          <Image
            source={photoPostComment}
            style={styles.photoPostComment}
          ></Image>
        </View>
        {commentsTrial && (
          <FlatList
            data={commentsTrial}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        )}
        <View>
          <TextInput
            style={[styles.inputComment, isFocusComment && styles.isFocus]}
            autoCapitalize="none"
            onChangeText={handleComment}
            value={""}
            placeholder="Коментувати..."
            onFocus={() => setIsFocusComment(true)}
            onBlur={() => setIsFocusComment(false)}
            multiline={true}
          />
          <View style={styles.iconButton}></View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 32,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#ffffff",
  },
  containerPost: {
    width: 343,
    height: 240,
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
  },
  photoPostComment: {
    width: 343,
    height: 240,
  },
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
  inputComment: {
    marginTop: 30,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    backgroundColor: "#F6F6F6",
  },
  iconButton: {
    position: "absolute",
    right: 8,
    bottom: 14,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
});

export default CommentsScreen;
