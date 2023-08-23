import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
} from "react-native";

const RegistrationScreen = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [email, onChangeEmail] = React.useState("Useless Text");
  const [password, onChangePassword] = React.useState("Useless Text");

  // const onPress = (PressEvent) => {};

  return (
    <KeyboardAvoidingView keyboardVerticalOffset="-1">
      <View style={styles.formContainer}>
        <Text style={styles.header}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Логін"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Пароль"
          keyboardType="visible-password"
        />
        <Button style={styles.button}>Зареєстуватися</Button>
        <TouchableWithoutFeedback onPress={onPress} accessibilityRole="link">
          <View style={styles.link}>
            <Text>Вже є акаунт? Увійти</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: 549,
    padding: 16,
    borderRadius: 25,
    backgroundColor: `#ffffff`,
  },
  header: {
    marginTop: 76,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    FontFamily: "Roboto",
  },
  input: {
    height: 50,
    width: 343,
    marginTop: 16,
    borderWidth: 1,
    // borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    FontFamily: "Roboto",

    color: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  button: {
    height: 51,
    width: 343,
    marginTop: 43,
    borderRadius: 100,

    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    textAlign: "center",
    FontFamily: "Roboto",
    backgroundColor: "#FF6C00",
  },
  link: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    textAlign: "center",
    FontFamily: "Roboto",
    textDecorationStyle: "solid",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
