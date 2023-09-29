import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Comment from "../components/Comment";
import { useSelector } from "react-redux";
import { selectPostsComments } from "redux/posts/postsSelectors";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/posts/postsOperations";

const photoPostComment = require("../images/photoPostComment.jpg");

const CommentsScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const [isFocusComment, setIsFocusComment] = useState(false);
  const comments = useSelector(selectPostsComments);
  const dispatch = useDispatch();

  const handleComment = (text) => {
    const comment = {
      iconProfile: "",
      text,
      dateCreate: Math.random().toFixed(6),
    };

    dispatch(updatePost(comment));
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
        {comments && (
          <FlatList
            data={comments}
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
            // value={""}
            placeholder="Коментувати..."
            onFocus={() => setIsFocusComment(true)}
            // onBlur={() => handleComment(value)}
            onBlur={() => setIsFocusComment(false)}
            multiline={true}
          />
          <Pressable style={styles.iconButton}>
            <AntDesign name="arrowup" size={24} color="#ffffff" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 32,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#ffffff",
  },
  containerPost: {
    height: 240,
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
  },
  photoPostComment: {
    height: 240,
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
    justifyContent: "center",
    alignItems: "center",
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
