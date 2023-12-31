import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Background from "../images/background.jpg";
import {
  selectError,
  selectIsLoggedIn,
  selectUser,
} from "../redux/auth/authSelectors";
import { logIn } from "../redux/auth/authOperations";
import { auth } from "../../config";
import { onAuthStateChanged } from "firebase/auth";
import { selectPosts } from "../redux/posts/postsSelectors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [isButtonPress, setIsButtonPress] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const posts = useSelector(selectPosts);

  const handleSubmit = () => {
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    if (user && isLoggedIn && !error) {
      navigation.navigate("BottomNavіgator");
    }
  }, [user]);

  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(`onAuthStateChanged ${user}`);
    });
    console.log(posts);
  }, []);

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      resizeMethod="resize"
      style={styles.imageBackground}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={-220}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardContainer}
        >
          <View style={styles.formContainer}>
            <Text style={styles.header}>Увійти</Text>

            <TextInput
              style={[styles.input, isFocusEmail && styles.isFocus]}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              onFocus={() => setIsFocusEmail(true)}
              onBlur={() => setIsFocusEmail(false)}
            />
            <View style={styles.buttonContainer}>
              <TextInput
                style={[styles.input, isFocusPassword && styles.isFocus]}
                autoCapitalize="none"
                onChangeText={setPassword}
                value={password}
                placeholder="Пароль"
                secureTextEntry={secureTextEntry}
                onFocus={() => setIsFocusPassword(true)}
                onBlur={() => setIsFocusPassword(false)}
              />
              <Pressable
                style={styles.textInput}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
              >
                <Text>{secureTextEntry ? "Показати" : "Приховати"}</Text>
              </Pressable>
            </View>

            <Pressable
              style={[styles.button, isButtonPress && styles.isButtonPress]}
              onPressIn={() => {
                setIsButtonPress(true);
              }}
              onPressOut={() => {
                setIsButtonPress(false);
              }}
              onPress={handleSubmit}
            >
              <Text style={styles.text}>Увійти</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    padding: 16,
    paddingBottom: 111,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: `#ffffff`,
  },
  buttonContainer: {
    width: "100%",
  },
  header: {
    marginTop: 16,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto",
  },
  input: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    backgroundColor: "#F6F6F6",
  },
  isFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    position: "absolute",
    left: 255,
    top: 35,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 145,
    paddingLeft: 145,
    marginTop: 43,
    borderRadius: 100,

    backgroundColor: "#FF6C00",
  },
  isButtonPress: {
    backgroundColor: "#ff5500",
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#ffffff",
  },
  link: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Roboto",
    textDecorationStyle: "solid",
    color: "#1B4371",
  },
});

export default LoginScreen;
