import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const LoginScreen = () => {
  const [email, onChangeEmail] = React.useState("Useless Text");
  const [password, onChangePassword] = React.useState("Useless Text");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="useless placeholder"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="useless placeholder"
        keyboardType="visible-password"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
