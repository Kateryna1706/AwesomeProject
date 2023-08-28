import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <View>
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
          style={[styles.button, isButtonPress && styles.isButtonPress]}
          onPressIn={() => {
            setIsButtonPress(true);
          }}
          onPressOut={() => {
            setIsButtonPress(false);
          }}
        >
          <Text style={styles.text}>Увійти</Text>
        </Pressable>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    top: 279,
    padding: 16,
    paddingBottom: 111,
    borderRadius: 25,
    backgroundColor: `#ffffff`,
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
    position: "absolute",
    right: 28,
    top: 167,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  button: {
    display: "flex",
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

export default LoginScreen;
