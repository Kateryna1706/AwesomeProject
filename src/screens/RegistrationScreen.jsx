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
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

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

  const onPress = () => {
    console.log("ncndj");
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.formContainer}
    >
      <View style={styles.containerPhoto}>
        <Image source={photo} style={styles.photoProfile} />
        <Pressable onPress={onPress} style={styles.button}>
          <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
        </Pressable>
      </View>

      <View>
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
        <Pressable
          style={[styles.buttonSubmit, isButtonPress && styles.isButtonPress]}
          onPressIn={() => {
            setIsButtonPress(true);
          }}
          onPressOut={() => {
            setIsButtonPress(false);
          }}
        >
          <Text style={styles.text}>Зареєстуватися</Text>
        </Pressable>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.link}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    top: 219,
    padding: 16,
    paddingBottom: 45,
    borderRadius: 25,
    backgroundColor: `#ffffff`,
  },
  containerPhoto: {
    top: -80,
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoProfile: {
    borderRadius: 16,
  },
  button: {
    width: 25,
    left: 105,
    top: -35,
    borderRadius: 50,
    backgroundColor: "#E8E8E8",
  },
  header: {
    // marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto",
  },
  input: {
    height: 50,
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
    left: 250,
    top: -37,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    width: 343,
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
