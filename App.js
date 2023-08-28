import { useFonts } from "expo-font";
import PostsScreen from "./src/screens/PostsScreen";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <PostsScreen />
    </View>
  );
}
