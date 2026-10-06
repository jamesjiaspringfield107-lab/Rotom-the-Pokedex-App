import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context"; //Hooks

//inline css test
export default function Layout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#000000",
        tabBarActiveBackgroundColor: "#dcd5d5",
        headerShown: true,
        headerTintColor: "#000000",

        headerStyle: {
          backgroundColor: "#fbf7f7",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },

        tabBarItemStyle: {
          borderRadius: 10,
          marginHorizontal: 5,
          overflow: "hidden",
          marginVertical: 3,
          paddingBottom: 2,
        },

        tabBarStyle: {
          backgroundColor: "#fbf7f7",
          paddingBottom: 0 + insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: "#f87109",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokepedia"
        options={{
          title: "Pokedex",
          tabBarActiveTintColor: "#f80909",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokeball" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Team",
          tabBarActiveTintColor: "#079e1b",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarActiveTintColor: "#1909f8",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
