import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//inline css test
export default function Layout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f8b009",
        headerShown: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 5 + insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokepedia"
        options={{
          title: "Pokedex",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokeball" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Team",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokeos"
        options={{
          title: "PokeOS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
