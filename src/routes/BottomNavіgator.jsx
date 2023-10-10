import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/authOperations";
import { selectError, selectUser } from "../redux/auth/authSelectors";
import { useEffect } from "react";

const Tabs = createBottomTabNavigator();

const BottomNavіgator = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  useEffect(() => {
    if (user) {
      return;
    }
    if (!user) {
      navigation.navigate("LoginScreen");
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 24;

          if (route.name === "PostsScreen") {
            iconName = "grid-outline";
            color = focused ? "#FF6C00" : "#BDBDBD";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "add";
            color = "#BDBDBD";
          } else if (route.name === "ProfileScreen") {
            iconName = "person-outline";
            color = focused ? "#FF6C00" : "#BDBDBD";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
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
          headerRight: () => (
            <Pressable
              onPress={() => {
                dispatch(logOut());
              }}
            >
              <Ionicons name="exit-outline" size={25} color="#BDBDBD" />
            </Pressable>
          ),
          headerRightContainerStyle: { paddingRight: 20 },
        })}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("PostsScreen")}>
              <Ionicons name="arrow-back" size={24} color="#212121" />
            </Pressable>
          ),
          headerBackVisible: true,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          title: "Створити публікацію",
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
          tabBarItemStyle: {
            borderRadius: 20,
            backgroundColor: "#FF6C00",
          },
          tabBarStyle: {
            display: "none",
          },
          unmountOnBlur: true,
        })}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: false,
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavіgator;
