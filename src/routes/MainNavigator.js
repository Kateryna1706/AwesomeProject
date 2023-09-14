import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomNavіgator from "./BottomNavіgator";
import CommentsScreen from "../screens/CommentsScreen";

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
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: false,
            headerShown: false,
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
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerStyle: {
              backgroundColor: "#FFFFFF",
              borderBottomWidth: 1,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              lineHeight: 22,
              color: "#212121",
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
