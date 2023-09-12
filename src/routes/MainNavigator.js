import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomNavіgator from "./BottomNavіgator";

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            title: false,
          }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: false,
          }}
        />
        <MainStack.Screen
          name="BottomNavіgator"
          component={BottomNavіgator}
          options={{
            title: false,
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
