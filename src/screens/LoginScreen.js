import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

import { Formik } from "formik";

const initialValues = { email: "", password: "" };

const LoginScreen = () => {
  
  const onPress = () => {
    console.log("bvjfj");
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset="-1"
      style={styles.formContainer}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View collapsable={false}>
            <Text style={styles.header}>Увійти</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Пароль"
              keyboardType="visible-password"
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.text}>Увійти</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <TouchableWithoutFeedback onPress={onPress} accessibilityRole="link">
        <View style={styles.link}>
          <Text>Немає акаунту? Зареєструватися</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 489,
    padding: 16,
    borderRadius: 25,
    backgroundColor: `#ffffff`,
  },
  header: {
    marginTop: 16,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    FontFamily: "Roboto",
  },
  input: {
    height: 50,
    width: 343,
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
