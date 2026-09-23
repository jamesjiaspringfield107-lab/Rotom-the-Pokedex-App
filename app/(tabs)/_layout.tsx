import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context"; //Hooks

//inline css test
export default function Layout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f8b009",
        tabBarInactiveTintColor: "#000000",
        tabBarActiveBackgroundColor: "#dcd5d5",
        headerShown: true,

        tabBarItemStyle: {
          borderRadius: 10,
          marginHorizontal: 5,
          overflow: "hidden", //since borderRadius doesnt work as intented, using overfow to force the borderRadius to show its shape
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
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokepedia"
        options={{
          title: "Pokedex",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokeball" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Team",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokeos"
        options={{
          title: "PokeOS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokemon-go" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
