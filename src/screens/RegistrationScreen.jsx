import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  Image,
  TouchableOpacity,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import Background from "../images/background.jpg";
import { register } from "../redux/auth/authOperations";

const photo = require("../images/photoProfile.jpg");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusLogin, setIsFocusLogin] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [isButtonPress, setIsButtonPress] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    console.log("onPress");
  };

  const handleSubmit = () => {
    // console.log({ login, email, password });
    dispatch(register({ email, password }));
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("BottomNavіgator");
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      resizeMethod="resize"
      style={styles.imageBackground}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={-130}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardContainer}
        >
          <View style={styles.formContainer}>
            <View style={styles.containerPhoto}>
              <Image source={photo} style={styles.photoProfile} />
              <Pressable onPress={onPress} style={styles.button}>
                <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
              </Pressable>
            </View>

            <Text style={styles.header}>Реєстрація</Text>
            <TextInput
              style={[styles.input, isFocusLogin && styles.isFocus]}
              autoCapitalize="none"
              onChangeText={setLogin}
              value={login}
              placeholder="Логін"
              onFocus={() => setIsFocusLogin(true)}
              onBlur={() => setIsFocusLogin(false)}
            />
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
              style={[
                styles.buttonSubmit,
                isButtonPress && styles.isButtonPress,
              ]}
              onPressIn={() => {
                setIsButtonPress(true);
              }}
              onPressOut={() => {
                setIsButtonPress(false);
              }}
              onPress={handleSubmit}
            >
              <Text style={styles.text}>Зареєстуватися</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.link}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: `#ffffff`,
  },
  containerPhoto: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoProfile: {
    borderRadius: 16,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    width: 25,
    left: 105,
    top: -35,
    borderRadius: 50,
    backgroundColor: "#E8E8E8",
  },
  header: {
    marginTop: 92,
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
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 109,
    paddingLeft: 109,
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

export default RegistrationScreen;
