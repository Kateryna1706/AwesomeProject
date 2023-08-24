import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";

import Svg, { Circle } from "react-native-svg";

// import { AntDesign } from "@expo/vector-icons";

const photo = require("../images/photoProfile.jpg");

import { Formik } from "formik";

const initialValues = { name: "", email: "", password: "" };

const RegistrationScreen = () => {
  const onPress = () => {
    console.log("ncndj");
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset="-1"
      style={styles.formContainer}
    >
      <View style={styles.photoProfile}>
        <Image source={photo} />
        <Pressable onPress={onPress}>
          <Svg
            height="25"
            width="25"
            viewBox="0 0 100 100"
            slyle={styles.button}
          >
            <Circle
              cx="50"
              cy="50"
              r="50"
              stroke="#BDBDBD"
              strokeWidth="1"
              fill="#E8E8E8"
            />
          </Svg>
          {/* <Image
            source={require("../images/cross.svg")}
            fadeDuration={0}
            slyle={styles.button}
          /> */}
          {/* <AntDesign
            name="closecircleo"
            size={25}
            color="#BDBDBD"
            onPress={onPress}

          /> */}
        </Pressable>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Text style={styles.header}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("name")}
              value={values.name}
              placeholder="Логін"
            />
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
            <Pressable onPress={handleSubmit} style={styles.buttonSubmit}>
              <Text style={styles.text}>Зареєстуватися</Text>
            </Pressable>

            <TouchableWithoutFeedback
              onPress={onPress}
              accessibilityRole="link"
            >
              <Text style={styles.link}>Вже є акаунт? Увійти</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 549,
    padding: 16,
    borderRadius: 25,
    backgroundColor: `#ffffff`,
  },
  photoProfile: {
    position: "absolute",
    top: -60,
    left: 128,
    zIndex: 10,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  button: {
    position: "absolute",
    right: -12,
    bottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    padding: 8,
    borderRadius: 50,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    textAlign: "center",
    color: "#BDBDBD",

    backgroundColor: "#fff",
  },
  header: {
    marginTop: 76,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto",
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
  buttonSubmit: {
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

export default RegistrationScreen;
