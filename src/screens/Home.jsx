import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        // tabBarActiveTintColor: "#FF6C00",
        // tabBarInactiveTintColor: "#BDBDBD",
        tabBarActiveBackgroundColor: "#F6F6F6",

        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "auto",
          paddingBottom: "auto",
          paddingRight: "auto",
          paddingLeft: "auto",
          borderRadius: 20,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 24;

          if (route.name === "PostsScreen") {
            iconName = "grid-outline";
            color = "#BDBDBD";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "trash-outline" : "add";
            color = "#BDBDBD";
          } else if (route.name === "ProfileScreen") {
            iconName = "person-outline";
            color = "#BDBDBD";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
          },
          headerTitleContainerStyle: {
            paddingLeft: 124,
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerRight: () => (
            <Pressable
              onPress={() => ({
                isLoggedIn: false,
              })}
              style={{ paddingRight: 20 }}
            >
              <Ionicons name="exit-outline" size={25} color="#BDBDBD" />
            </Pressable>
          ),
          HeaderBackButton: false,
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        // screenOptions={() => ({
        //   tabBarInactiveTintColor: "#ffffff",
        //   tabBarActiveBackgroundColor: "#BDBDBD",
        // })}
        options={{
          title: "Створити публікацію",
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
          },
          headerTitleContainerStyle: {
            paddingLeft: 64,
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
