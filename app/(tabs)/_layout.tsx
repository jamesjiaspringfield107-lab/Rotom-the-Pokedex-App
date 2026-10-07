import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();

  // ==========================================
  // HANDLERS
  // ==========================================
  const handleWipAlert = (featureName: string) => {
    Alert.alert("Work in Progress", `${featureName} button is still in WIP!`);
  };

  // ==========================================
  // HEADER COMPONENTS
  // ==========================================
  // Default header right icon for Home, Team, and More
  const renderDefaultHeaderRight = () => (
    <TouchableOpacity
      style={styles.headerButton_default}
      onPress={() => handleWipAlert("Menu Options")}
    >
      <Entypo name="dots-three-vertical" size={22} color="#000000" />
    </TouchableOpacity>
  );

  // Exclusive header right icons for Pokedex tab
  const renderPokedexHeaderRight = () => (
    <View style={styles.pokedexHeaderRight}>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => handleWipAlert("Grid View - List View Toggle")}
      >
        <Ionicons name="grid-outline" size={20} color="#000000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => handleWipAlert("Filter Options")}
      >
        <Ionicons name="filter-outline" size={20} color="#000000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => handleWipAlert("Menu Options")}
      >
        <Entypo name="dots-three-vertical" size={22} color="#000000" />
      </TouchableOpacity>
    </View>
  );

  // ==========================================
  // NAVIGATION CONFIGURATION
  // ==========================================
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTintColor: "#000000",
        headerStyle: {
          backgroundColor: "#fbf7f7",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: renderDefaultHeaderRight,

        tabBarInactiveTintColor: "#000000",
        tabBarActiveBackgroundColor: "#dcd5d5",
        tabBarItemStyle: {
          borderRadius: 10,
          marginHorizontal: 5,
          overflow: "hidden",
          marginVertical: 3,
          paddingBottom: 2,
        },
        tabBarStyle: {
          backgroundColor: "#fbf7f7",
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      {/* 1. Home Tab */}
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

      {/* 2. Pokédex Tab */}
      <Tabs.Screen
        name="pokepedia"
        options={{
          title: "Pokedex",
          tabBarActiveTintColor: "#f80909",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pokeball" size={26} color={color} />
          ),
          headerRight: renderPokedexHeaderRight,
        }}
      />

      {/* 3. Team Tab */}
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

      {/* 4. More Tab */}
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

// ==========================================
// STYLESHEET
// ==========================================
const styles = StyleSheet.create({
  headerButton_default: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  headerButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pokedexHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 8,
    gap: 4,
  },
});
